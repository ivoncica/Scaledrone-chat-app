function RandomAvatar() {
  const avatars = [
    "https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png",
    "https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png",
    "https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes-thumbnail.png",
    "https://w7.pngwing.com/pngs/464/801/png-transparent-computer-icons-avatar-user-profile-avatar-child-face-black-hair-thumbnail.png",
    "https://w7.pngwing.com/pngs/122/453/png-transparent-computer-icons-user-profile-avatar-female-profile-heroes-head-woman-thumbnail.png",
    "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png",
    "https://w7.pngwing.com/pngs/238/446/png-transparent-computer-icons-user-profile-avatar-old-man-face-heroes-head-thumbnail.png",
    "https://w7.pngwing.com/pngs/236/917/png-transparent-computer-icons-avatar-woman-user-profile-avatar-face-heroes-head-thumbnail.png",
    "https://w7.pngwing.com/pngs/304/305/png-transparent-man-with-formal-suit-illustration-web-development-computer-icons-avatar-business-user-profile-child-face-web-design-thumbnail.png",
    "https://w7.pngwing.com/pngs/530/47/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-conversation-professions-thumbnail.png",
  ];
  const avatar = avatars[Math.floor(Math.random() * avatars.length)];
  return avatar;
}

export default RandomAvatar;
