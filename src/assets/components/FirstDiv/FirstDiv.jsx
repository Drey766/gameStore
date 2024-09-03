import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import './FirstDiv.css';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, easeOut } from 'framer-motion';

function FirstDiv({ highlights }) {
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const buttonRef = useRef(null);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const PictureVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    setGames(highlights);
    setLoading(highlights.length === 0);
    console.log('highlightsFirst', highlights);
  }, [highlights]);

  useEffect(() => {
    const IntervalId = setInterval(() => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }, 5000);
    return () => clearInterval(IntervalId);
  }, []);

  const handleNext = () => {
    if (currentIndex === games.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(games.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <section className="firstDiv">
          <div className="firstDiv__cont">
            <div className="firstDivs__divsImg">
              <AnimatePresence>
                <motion.img
                  key={currentIndex}
                  className="firstDiv__img"
                  src={
                    games[currentIndex]?.game.artworks?.[0]?.url?.replace('/t_thumb/', '/t_screenshot_big/') || ''
                  }
                  alt="CarouselImg"
                  variants={PictureVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, ease: easeOut }}
                  style={{ opacity: 1, transform: 'none' }}
                />
              </AnimatePresence>
            </div>
            <div className="firstDiv__divs">
              <div className="firstDiv__divsCont">
                <AnimatePresence>
                  <motion.h1
                    key={currentIndex}
                    className="firstDiv__h1"
                    variants={animationVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, ease: easeOut }}
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    {games[currentIndex]?.game.name}
                  </motion.h1>
                </AnimatePresence>
                <AnimatePresence>
                  <motion.p
                    key={currentIndex}
                    className="firstDiv__p"
                    variants={animationVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    {games[currentIndex].game.summary}
                  </motion.p>
                </AnimatePresence>
                <div className="firstDiv__divsControl">
                  <Link
                    to="../gamedetails"
                    className="game__Link"
                    state={{
                      game: { id: games[currentIndex].game.id, name: games[currentIndex].game.name },
                    }}
                  >
                    <Button className="firstDiv__button">Buy</Button>
                  </Link>
                  <div className="firstDiv__arrows">
                    <Button onClick={handlePrev}>
                      <span className="firstDiv__arrow">
                        <ArrowBack />
                      </span>
                    </Button>
                    <Button onClick={handleNext} ref={buttonRef}>
                      <span className="firstDiv__arrow">
                        <ArrowForward />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default FirstDiv;