const container = document.querySelector(".teams-wrap");
function generateImageMarkup(users) {
    let markupImages = "";
    users.forEach((user) => {
        if (user.imgSmall) {
            markupImages += `
            <div class="team-block">
            <a href="./pages/user-info.html?userId=${user.id}" class="people-wrap">
                <div class="background-for-people">
                </div>
                <img src="${user.imgSmall}" class="small-img">
            </a>
            <div class="text-wrap">
                <h3 class="people-name">${user.name}</h3>
                <h4 class="people-position">${user.position}</h4>
            </div>
        </div>`;
        }
    });
    return markupImages;
}

const imagesMarkup = generateImageMarkup(users);
container.innerHTML = imagesMarkup;
