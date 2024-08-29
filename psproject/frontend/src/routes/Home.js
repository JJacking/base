/* Home.js */
import React from 'react';
import BoardList from "./BoardList";
import img1 from '../image/dog_1.jpg';


const Home = () => {
  // 반복되는 항목을 배열로 관리
  const items = [
    { imgSrc: img1, text: "test", description: "설명", link: "/board" },
    { imgSrc: img1, text: "test", description: "설명", link: "/board" },
    { imgSrc: img1, text: "test", description: "설명", link: "/board" },
    { imgSrc: img1, text: "test", description: "설명", link: "/board" },
    { imgSrc: img1, text: "test", description: "설명", link: "/board" },
    { imgSrc: img1, text: "test", description: "설명", link: "/board" },
    { imgSrc: img1, text: "test", description: "설명", link: "/board" },
    { imgSrc: img1, text: "test", description: "설명", link: "/board" },
    { imgSrc: img1, text: "test", description: "설명", link: "/board" },
  ];

  return (
    <div className='menubar'>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              <img src={item.imgSrc} width='100%' height='60%' alt='item'/>
              <p>{item.text}</p>
            </a>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
