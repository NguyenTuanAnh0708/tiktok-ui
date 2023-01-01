import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

AvatarPreview.propTypes = {};

function AvatarPreview(props) {
  const [avatar, setAvatar] = useState(null);
  console.log(avatar);
  const handelAvatar = (e) => {
    const file = e.target.files;
    file.preview = URL.createObjectURL(file[0]);
    setAvatar(file);
    avatar && console.log(avatar.preview);
  };
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  });
  return (
    <div>
      <h1>Avatar preview</h1>
      <input type="file" onChange={(e) => handelAvatar(e)} />
      <br />
      {avatar == null ? (
        <p>Chọn ảnh đại diện</p>
      ) : (
        <img
          src={avatar.preview}
          alt=""
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
}

export default AvatarPreview;
