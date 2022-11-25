import React, { useState } from "react";
import style from "./GithubHomepageClone.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import BackupTableSharpIcon from '@mui/icons-material/BackupTableSharp';

const GithubHomepageClone = () => {
  const [category,setCategory]=useState()
  const state = useSelector((state) => state.GithubCloneReducer);

  const changeCategory=(e)=>{

  }
  return (
    <>
      <nav id={style.homeNav}>
        <div id={style.homeNavLeft}>
          <GitHubIcon fontSize="large" />
          <input placeholder="Search or jump to..." id={style.inpSearch}/>
          <ul className={style.navUls} id={style.navLinks}>
            <li>Pull Requests</li>
            <li>Issues</li>
            <li>Marketplace</li>
            <li>Explore</li>
          </ul>
        </div>
        <ul className={style.navUls} id={style.navIcons}>
          <li>
            <NotificationsNoneIcon />
          </li>
          <li>
            <AddIcon />
            <ArrowDropDownIcon />
          </li>
          <li>
            <img
              id={style.avatarImg}
              alt="avatar"
              src={state.user.avatar_url}
            />
            <ArrowDropDownIcon />
          </li>
        </ul>
      </nav>
      <nav id={style.parentNav}><ul className={`${style.navUls} ${style.parentNavUls}`}><li onClick={changeCategory}><MenuBookOutlinedIcon fontSize="small"/> Overview</li><li onClick={changeCategory}><BookOutlinedIcon fontSize="small"/> Repositories</li><li onClick={changeCategory}><BackupTableSharpIcon fontSize="small"/> Projects</li></ul></nav>
      <div id={style.parent}>
      <div id={style.parentLeft}>
        <img id={style.profileAvatar} alt="avatar" src={state.user.avatar_url}/>
        <h2>{state.user.name}</h2>
        <h3>{state.user.login}</h3>
        <div><button>Follow</button><button>Sponsor</button></div>
        {(state.user.bio)?<p>{state.user.bio}</p>:""}
        <div><p>{state.user.followers} followers</p><p>{state.user.following} following</p></div>
        {(state.user.location)?<div>{state.user.location}</div>:""}
        {(state.user.html_url)?<div>{state.user.html_url}</div>:""}
        {(state.user.blog)?<div>{state.user.blog}</div>:""}
        {(state.user.twitter_username)?<div>@{state.user.twitter_username}</div>:""}
      </div>
      </div>
    </>
  );
};

export default GithubHomepageClone;
