import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutLinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutLinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

function Header() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://www.vhv.rs/file/max/19/199530_facebook-logo-png.png"
					alt=""
				/>
				<div className="header__input">
					<SearchIcon />
					<input placeholder="Search Facebook" type="text" />
				</div>
			</div>

			<div className="header__center">
				<div
					className="header__option
                header__option--active"
				>
					<HomeIcon fontSize="large" />
				</div>
				<div className="header__option">
					<FlagIcon fontSize="large" />
				</div>
				<div className="header__option">
					<SubscriptionsOutLinedIcon fontSize="large" />
				</div>
				<div className="header__option">
					<StorefrontOutLinedIcon fontSize="large" />
				</div>
				<div className="header__option">
					<SupervisedUserCircleIcon fontSize="large" />
				</div>
			</div>

			<div className="header__right">
				<div className="header__info">
					<Avatar src={user.photoURL} />
					<h4>{user.displayName}</h4>
				</div>
				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Header;
