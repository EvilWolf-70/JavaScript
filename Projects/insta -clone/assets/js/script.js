const postDiv = document.getElementById("post");
let count = 1;
let heightInner = 5400;

function loadpost() {
  $.get(
    `https://instagram-data-edyoda-sourav.herokuapp.com/posts/${count}`,
    function (response) {
      console.log(response[0].user);
      for (let i = 0; i < response.length; i++) {
        console.log(response, response[i].user.photo);
        postDiv.innerHTML += `
            <div class="postsectionBody">
                <div class="postheader">
                    <div class="profilepic">
                        <img src=${response[i].user.photo} alt="profilepicture"/>
                    </div>

                    <div class="userName">
                    <p>${response[i].user.name}</p>
                    </div>

                </div>
                <div class="postpic">
                        <img src=${response[i].postPic} alt="posterpic"/>
                </div>

                <div class="insta-icons">
           
                <i class='far fa-heart'></i>
                <i class='far fa-comment'></i>
                <i class='fa fa-send-o'></i>
                
                <i class="fa fa-bookmark-o"></i>
                <p class="likeCount">${response[i].reactions} likes</p>
                </div>
                <div class="content">
                    <p>
                        <span class="name">${response[i].user.name}</span>
                        <span class="desc">${response[i].body}</span>     
                    </p>

                </div>
                <div>
                    <input type="text" placeholder="Add a Comment..." class="commentBox"/>

                </div>
            </div>
        `;
      }
    }
  );
  count = count === 10 ? 1 : count + 1;
}
loadpost();

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(window.innerHeight);
  //   if ((window.scrollY = window.innerHeight >= 5400)) {
  //     heightInner += 5400;
  //     loadpost();
  //     console.log(heightInner);
  //   }
});
