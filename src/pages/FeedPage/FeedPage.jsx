import React from "react";

import s from "./FeedPage.module.scss";

function FeedPage() {

  // 1) Создать postsSlice 
  // 2) Получить массив постов на страницу feedPage

  // {
  //   posts: [{id: 1, title:"asdfasdf "}]
  // }

  return (
    <div className={s.feedPage}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.posts}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedPage;
