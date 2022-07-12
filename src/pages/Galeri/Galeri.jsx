/** @format */

import React, { useCallback, useEffect, useState } from "react";
import "./style.css";
import Loading from "../../components/Loading";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useDispatch, useSelector } from "react-redux";
import { galeriSelector, getGaleri } from "../../features/galeriSlice";

const Galeri = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const [loading, setLoading] = useState(true);
  // const [photos, setPhotos] = useState([]);
  const galeriStatus = useSelector((state) => state.galeri.status);
  const dataGaleri = useSelector(galeriSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGaleri());
  }, [dispatch]);

  useEffect(() => {
    if (galeriStatus === "success") {
      if (dataGaleri.data) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
  }, [galeriStatus, dataGaleri]);

  const getPhotos = () => {
    return dataGaleri.data.map((data, index) => {
      return {
        src: data.image,
        width: 4,
        height: 3,
        alt: data.title,
        title: data.title,
      };
    });
  };

  // const photos = [
  //   {
  //     src: "http://example.com/example/img1.jpg",
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     src: "http://example.com/example/img2.jpg",
  //     width: 1,
  //     height: 1,
  //   },
  // ];

  const zpGaleri = () => {
    return (
      <div>
        <Gallery photos={getPhotos()} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={getPhotos().map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  };

  return <div>{loading ? <Loading /> : zpGaleri()}</div>;
};

export default Galeri;
