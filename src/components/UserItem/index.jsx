import React from "react";
import "./UserItem.css";
import PaintBrushIcon from "@heroicons/react/24/outline/PaintBrushIcon";

const UserItem = () => {
    return (
        <div className="user-wrap">
            <img
                src="https://picsum.photos/200/300"
                alt="user"
                className="user-image"
            />
            <div className="user-content">
                <div className="user-content-header">
                    <h6 className="user-name">Hồ Thị Thơm</h6>
                    <span>20:27</span>
                </div>
                <div className="user-content-bottom">
                    <p className="user-content-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolorem quo velit explicabo quod ducimus
                        blanditiis dignissimos ullam vel officiis quis facere
                        atque laborum facilis alias officia, quos possimus
                        quaerat natus.
                    </p>
                    <PaintBrushIcon className="icon user-context-icon" />
                </div>
            </div>
        </div>
    );
};

export default UserItem;
