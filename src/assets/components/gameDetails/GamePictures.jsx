import { ArrowBack, HeartBroken } from '@mui/icons-material';
import React from 'react';
import './GamePictures.css';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function GamePictures({ title, mainImage, image1, image2, image3 }) {
  const PictureVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
  };

  return (
    <div className="gamePictures">
      <div className="gamepictures__background" style={{backgroundImage: `url(${mainImage})`}}></div>
      <div className="gamePictures__cont">
        <div className="gamePictures__nav">
          <Link to='../games' className="gamePicture__returnLink">
            <div className="gamePictures__return">
              <ArrowBack className="gamePictures__arrow" /> Back to Catalogue
            </div>
          </Link>
          <div className="gamePictures__title">
            <h4 className="gamePictures__heading">{title}</h4>
            <span className="gamePictures__addToFav">
              <HeartBroken className="gamePictures__heart" /> Add to favorites
            </span>
          </div>
        </div>
        <div className="gamePictures__pictures">
          <div className="gamePictures__mainPictureCont">
            <AnimatePresence>
              <motion.img
                key={title}
                src={mainImage}
                alt="main image"
                className="gamePictures__mainPicture"
                variants={PictureVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4}}
                style={{ opacity: 1, transform: 'none' }}
              />
            </AnimatePresence>
          </div>
          <div className="gamePictures__morePictures">
            <div className="gamePictures__pictureCont">
              <AnimatePresence>
                <motion.img
                  key={title}
                  src={image1}
                  alt="image2"
                  className="gamePictures__picture"
                  variants={PictureVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4}}
                  style={{ opacity: 1, transform: 'none' }}
                />
              </AnimatePresence>
            </div>
            <div className="gamePictures__pictureCont">
              <AnimatePresence>
                <motion.img
                  key={title}
                  src={image2}
                  alt="image3"
                  className="gamePictures__picture"
                  variants={PictureVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4}}
                  style={{ opacity: 1, transform: 'none' }}
                />
              </AnimatePresence>
            </div>
            <div className="gamePictures__pictureCont">
              <AnimatePresence>
                <motion.img
                  key={title}
                  src={image3}
                  alt="image4"
                  className="gamePictures__picture"
                  variants={PictureVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4}}
                  style={{ opacity: 1, transform: 'none' }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePictures;