import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PlaylistDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    //load details
  }, [id]);

  return <div>I'm a playlist</div>;
};

export default PlaylistDetail;
