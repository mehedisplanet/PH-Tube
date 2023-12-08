// const category = () => {
//   fetch(`https://openapi.programming-hero.com/api/videos/categories`)
//     .then((res) => res.json())
//     .then((data) => categorySection(data.data));
// };

// const categorySection = (data) => {
//   const category = document.getElementById("contentSort");
//   data.forEach((menu) => {
//     console.log(menu);
//     const card = document.createElement("div");
//     card.innerHTML = `
//     <button>${menu.category}</button>
//   `;
//     category.appendChild(card);
//   });
// };

const loadData = () => {
  fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};
let musicData = () => {
  fetch(`https://openapi.programming-hero.com/api/videos/category/1001`)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};
let comedyData = () => {
  fetch(`https://openapi.programming-hero.com/api/videos/category/1003`)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};
let drawingData = () => {
  fetch(`https://openapi.programming-hero.com/api/videos/category/1005`)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};

const displayData = (data) => {
  console.log(data);
  if (data.length == 0) {
    const allContent = document.getElementById("allContent");
    allContent.innerHTML = "";
    const nodata = document.createElement("div");
    nodata.innerHTML = `
    <br/>
    <br/>
    <img src="icon.png" alt=""/>
    <h2>No Data Found</h2>`;
    allContent.appendChild(nodata);
  } else {
    const allContent = document.getElementById("allContent");
    allContent.innerHTML = "";
    data.forEach((song) => {
      console.log(song);
      const card = document.createElement("div");
      card.innerHTML = `
    <img class="imgBox" src="${song.thumbnail}" alt=""/>
    <br/>
    <div class="title">
    <img class="imgPro" src="${song.authors[0].profile_picture}" alt=""/>
      <h2 >${song.title}</h2>
    </div>
      <div class="details">
      <span>${song.authors[0].profile_name}</span>
      <span>
      <img class="imgVer" src="${
        song.authors[0].verified ? "b.png" : " "
      }" alt="">
      </span>
      <p>${song.others.views} views</p>
      </div>
    `;
      allContent.appendChild(card);
    });
  }
};

loadData();
// category();