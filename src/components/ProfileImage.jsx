const ProfileImage = (props) => {
    const {image} = props;
    return (
        <img src={image} alt="Profile" className="profile" />
    )
}

export default ProfileImage;