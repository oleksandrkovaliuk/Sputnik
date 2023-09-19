const searchUser = window.location.search;
const searchParams = new URLSearchParams(searchUser);
const userId = parseInt(searchParams.get("userId"));

const userImgBg = document.querySelector("#user-img-bg");
const userPosition = document.querySelector("#user-position");
const userSkills = document.querySelector("#user-skills");
const userName = document.querySelector("#user-name");
const prevUserSelected = document.querySelector("#prev-user");
const nextUserSelected= document.querySelector("#next-user");

function generateListOfGoals(goals) {
  let markupGoals = "";
  goals.forEach((element) => {
    markupGoals += `<li class="user-skills"><h4 class="skills-text">${element}</h4></li>`;
  });
  return markupGoals;
}
const selectedUserIndex = users.findIndex((selectedUser) => {
  return selectedUser.id === userId;
});

const selectedUser = users[selectedUserIndex];

function updateUser({selectedUser , prevUserName , nextUserName}) {
  userImgBg.style.backgroundImage = `url(..${selectedUser.imgUrl})`
  userPosition.textContent = selectedUser.position;
  userName.textContent = selectedUser.name;
  userSkills.innerHTML = generateListOfGoals(selectedUser.listOfGoals);
  prevUserSelected.querySelector('h3').innerText = prevUserName;
  nextUserSelected.querySelector('h3').innerText = nextUserName;
}

function returnNextOrPreviousUser(userIndex){
  const obj = {
    prevUser: null,
    nextUser: null
  }
  if(userIndex === users.length - 1){
    obj.prevUser = users[userIndex - 1];
    obj.nextUser = users[0];
    return obj;

  }
  if(userIndex === 0){
    obj.prevUser = users.at(-1);
    obj.nextUser = users[userIndex + 1];
    return obj;
  }
    obj.prevUser = users[userIndex - 1];
    obj.nextUser = users[userIndex + 1];

  return obj;
}

const { prevUser , nextUser } = returnNextOrPreviousUser(selectedUserIndex , users);

updateUser({
  selectedUser,
  prevUserName: prevUser.name,
  nextUserName: nextUser.name,
});

prevUserSelected.addEventListener('click', () => {
  window.open(`./user-info.html?userId=${prevUser.id}` ,'_self')
})
nextUserSelected.addEventListener('click', () => {
  window.open(`./user-info.html?userId=${nextUser.id}` ,'_self')
})