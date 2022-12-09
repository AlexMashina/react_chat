import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";

import "./Message.scss";
import readedIcon from "../../assets/img/readed.svg";
import noreadedIcon from "../../assets/img/noreaded.svg";

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments }) => (
  <div className={classNames("message", { "message--isMe": !isMe })}>
    <div className="message__avatar">
      <img
        className="message__avatar-image"
        src={avatar}
        alt={`Avatar ${user.fullname}`}
      />
    </div>
    <div className="message__content">
      <div className="message__bubble">
        <p className="message__text">{text}</p>
      </div>
      {attachments && (
        <div className="message__attachments">
          {attachments.map((item, index) => (
            <img
              className="message__attachments_img"
              src={item.url}
              alt={item.filename}
              key={index.toString()}
            />
          ))}
        </div>
      )}
      <time className="message__date">
        {formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}
      </time>
    </div>
    {isMe &&
      (isReaded ? (
        <div className={"message__checked"}>
          <img
            className={"message__checked_icon"}
            src={readedIcon}
            alt="Сообщение прочитано"
          />
        </div>
      ) : (
        <div className={"message__checked"}>
          <img
            className={"message__checked_icon"}
            src={noreadedIcon}
            alt="Сообщение не прочитано"
          />
        </div>
      ))}
  </div>
);

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attahcments: PropTypes.array,
};

export default Message;
