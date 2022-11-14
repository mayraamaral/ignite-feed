import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface IAvatar extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean,
}

export const Avatar = ({ hasBorder = true, ...props }: IAvatar) => {
  return (
    <img 
    className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    {...props} />
  )
}