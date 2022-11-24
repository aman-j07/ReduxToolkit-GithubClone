import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./GithubClone.module.css";
import { fetchUser } from "./GithubCloneSlice";

const GithubClone = () => {
  const state = useSelector((state) => state.GithubCloneReducer);
  const dispatch = useDispatch();

  const keyDownHandlerSearch = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchUser(e.target.value));
    }
  };

  return (
    <div id={style.parentDiv}>
      <h1>Get GitHub Profile Cards!</h1>
      <input
        placeholder="Search a Github user"
        onKeyDown={keyDownHandlerSearch}
        id={style.inpSearch}
      />
      {state.error === "" ? (
        Object.keys(state.user).length === 0 ? (
          ""
        ) : (
          <div id={style.detailsDiv}>
            <img src={state.user.avatar_url} alt="Avatar"/>
            <div id={style.userStats}>
              <div id={style.userStatsHeadDiv}><h1>{state.user.name}</h1><button id={style.btnViewProfile}>View Profile</button></div>
              <p>{state.user.bio}</p>
              <div>
                <p className={style.userStatsPara}>{state.user.followers} Followers</p>
                <p className={style.userStatsPara}>{state.user.following} Following</p>
                <p className={style.userStatsPara}>{state.user.public_repos} Repos</p>
              </div>
              <div id={style.repoDivsParent}>{state.user.repos.slice(0,5).map(item=>{return(<div key={item.id} className={style.repoDivs}>{item.name}</div>)})}</div>
            </div>
          </div>
        )
      ) : (
        <div id={style.detailsDiv}>{state.error}</div>
      )}
    </div>
  );
};

export default GithubClone;
