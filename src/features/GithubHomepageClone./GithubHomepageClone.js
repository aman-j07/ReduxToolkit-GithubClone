import React, { useEffect, useState } from "react";
import style from "./GithubHomepageClone.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import BackupTableSharpIcon from '@mui/icons-material/BackupTableSharp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LinkIcon from '@mui/icons-material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';

const GithubHomepageClone = () => {
  const [category,setCategory]=useState()
  const state = useSelector((state) => state.GithubCloneReducer);
  useEffect(()=>{
    changeCategory("Overview")
  },[])
  const clickHandlerCategory=(e)=>{
    let children=e.target.parentNode.children
    for(let i=0;i<children.length;i++){
      children[i].classList.remove(style.selectedCategory)
    }
    e.target.classList.add(style.selectedCategory)
    changeCategory(e.target.innerText)
  }
  const changeCategory=(categ)=>{
    if(categ==="Overview"){
      setCategory(<div id={style.parentRight} className={`${style.parentRightWide} ${style.parentRight}`}>
      {state.user.repos.map(item=>{return(<div key={item.id} className={`${style.homePageReposWide} ${style.homePageRepos}`}><div className={`${style.homePageReposWideHead} ${style.homePageReposHead}`}><h4>{item.name}</h4>{item.private? "":<div className={`${style.homePageReposWideAccess} ${style.homePageReposAccess}`}>Public</div>}</div><p className={`${style.homePageReposDescription} ${style.homePageReposLang}`}>{item.description}</p><p className={`${style.homePageReposLang}`}>{item.language}</p></div>)})}
    </div>)
    }
    else if(categ==="Repositories"){
      setCategory(  <div id={style.parentRight} className={`${style.parentRightNarrow} ${style.parentRight}`}>
      {state.user.repos.map(item=>{return(<div key={item.id} className={`${style.homePageReposNarrow} ${style.homePageRepos}`}><div className={`${style.homePageReposNarrowHead} ${style.homePageReposHead}`}><h4>{item.name}</h4>{item.private? "":<div className={`${style.homePageReposNarrowAccess} ${style.homePageReposAccess}`}>Public</div>}</div><p className={`${style.homePageReposDescription} ${style.homePageReposLang}`}>{item.description}</p><p className={`${style.homePageReposLang}`}>{item.language}</p></div>)})}
    </div> )}
    else if(categ==="Projects"){
      setCategory(<div className={style.parentRight} ><div id={style.project}><BackupTableSharpIcon/><h2>There aren't any projects yet</h2></div></div>)
    }
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
      <nav id={style.parentNav}><ul className={`${style.navUls} ${style.parentNavUls}`}><li onClick={clickHandlerCategory}><MenuBookOutlinedIcon fontSize="small"/> Overview</li><li onClick={clickHandlerCategory}><BookOutlinedIcon fontSize="small"/> Repositories</li><li onClick={clickHandlerCategory}><BackupTableSharpIcon fontSize="small"/> Projects</li></ul></nav>
      <section id={style.parent}>
      <div id={style.parentLeft}>
        <img id={style.profileAvatar} alt="avatar" src={state.user.avatar_url}/>
        <div className={style.userDetails}><h2 className={`${style.noMar}`}>{state.user.name}</h2>
        <h3 className={`${style.noMar} ${style.name}`}>{state.user.login}</h3>
        <div><button className={style.btnSimple}>Follow</button><button className={style.btnSimple}>Sponsor</button></div>
        {(state.user.bio)?<p className={`${style.noMar} ${style.bio}`}>{state.user.bio}</p>:""}
        <div className={`${style.homePageReposHead}`}><p className={`${style.userFollow} ${style.colFollow}`}><span className={style.heavyFont}>{state.user.followers}</span> followers</p><p className={`${style.userFollow} ${style.colFollow}`}><span className={style.heavyFont}>{state.user.following}</span> following</p></div>
        {(state.user.location)?<div className={`${style.colFollow} ${style.homePageReposHead}`}><LocationOnIcon sx={{ fontSize: 16 }}/>{state.user.location}</div>:""}
        {(state.user.html_url)?<div className={`${style.colFollow} ${style.homePageReposHead}`}><MailIcon sx={{ fontSize: 16 }}/>{state.user.html_url}</div>:""}
        {(state.user.blog)?<div className={`${style.colFollow} ${style.homePageReposHead}`}><LinkIcon sx={{ fontSize: 16 }}/>{state.user.blog}</div>:""}
        {(state.user.twitter_username)?<div className={`${style.colFollow} ${style.homePageReposHead}`}><TwitterIcon sx={{ fontSize: 16 }}/>@{state.user.twitter_username}</div>:""}
        </div>
      </div>
      {category}      
      </section>
    </>
  );
};

export default GithubHomepageClone;
