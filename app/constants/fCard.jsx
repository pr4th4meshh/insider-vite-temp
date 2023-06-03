import React from "react";
import Link from "next/link";
import Image from "next/image";

const style = {
  grid_dev: `grid grid-cols-4 sm:grid-cols-8 md:grid-cols-8 lg:gap-4 sm:gap-0 xxs:gap-0`,

}

const Card = ({category, image, noOfEvents, id}) => {
  return (
    <div>
      <div className={`${style.grid_dev}`}>
        <div className={`${style.grid_card}`}>
          <Link href={`/category/${category}`}>
            <Image className={`${style.grid_img}`} src={image} alt="Your Image" />
            <div className={`${style.grid_subdiv}`}>
              <p className={`${style.grid_p}`}>
                {category}
                <br />
              </p>
              <h4 className={`${style.gird_h4}`}> {noOfEvents} events </h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
