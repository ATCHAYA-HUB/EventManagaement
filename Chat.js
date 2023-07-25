import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const Chat = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

	return (
		<ChatEngine
			height='100vh'
			userName="Atchaya"
			userSecret="@Atchaya22"
			projectID="ddc71a14-d506-4823-8333-bc127de21418"
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default Chat;