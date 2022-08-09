import React from "react";

import styles from "./FeedPhotos.module.css";

import useFetch from "../../Hooks/useFetch";

import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import FeedPhotosItem from "./FeedPhotosItem";
import { PHOTOS_GET } from "../../api";

const FeedPhotos = ({ setInfinite, setModalPhoto, page, user }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      console.log(json);
      if (response && response.ok && json.length < total) setInfinite(false);
    };
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
};

export default FeedPhotos;
