const linksSocialMedia = {
  github: 'PauloVieira28',
  youtube: 'channel/UCI2wc8dJiawR0ew78WVGRYQ',
  faceboock: 'paulo.cesar.98031',
  instagran: 'paulocevier/',
  twitter: 'paulo_vieira22'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
