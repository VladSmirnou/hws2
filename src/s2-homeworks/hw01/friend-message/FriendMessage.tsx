import React from 'react'
import s from './FriendMessage.module.css'
import { MessageType } from '../HW1'

// создать тип вместо any и отобразить приходящие данные
type MessagePropsType = {
    message: MessageType
}

const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}
                    alt='the author of this post'
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                            <span>{props.message.user.name}</span>
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                            <p>{props.message.message.text}</p>
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                    <span>{props.message.message.time}</span>
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
