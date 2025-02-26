import { useEffect, useRef, useState } from "react";
import { emojiHeart, emojiHaha, emojiLike, emojiLove, emojiAngry } from "../Image/Image";

function EmojiCanvas({
    onclick
}) {
    const canvasRef = useRef(null);
    const [hoveredEmoji, setHoveredEmoji] = useState(null);
    const [images, setImages] = useState({});
    const emojiObjs = [
        {id: 'like', emoji: emojiLike},
        {id: 'love', emoji: emojiLove},
        {id: 'heart', emoji: emojiHeart},
        {id: 'haha', emoji: emojiHaha},
        {id: 'angry', emoji: emojiAngry},

    ]
        

    useEffect(() => {
        const loadImgs = async () => {
            const loadedImgs = {}
            for(const emojiObj of emojiObjs) {
                const img = new Image()
                img.src = emojiObj.emoji
                await new Promise((resolve) => {
                    img.onload = resolve
                })
                loadedImgs[emojiObj.id] = img
            }
            setImages(loadedImgs)
        }
        loadImgs()
    }, [])
    useEffect(() => {
        if (!Object.values(images).every((img) => img.complete)) return;
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        emojiObjs.forEach((emoji) => {
            const img = images[emoji.id]
            if(img) {
                const isHovered = hoveredEmoji === emoji.id
                const size = isHovered ? 60 : 50
                const x = emoji.x + (isHovered ? 5 : 0)
                const y = isHovered ? -5 : 0;
            ctx.drawImage(img, x, y, size, size);
            }
        })
    }, [images, hoveredEmoji])
    const handleMouseMove = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        if (y >= 0 && y <= 50) {
          const reactionIndex = Math.floor(x / 50);
          if (reactionIndex >= 0 && reactionIndex < emojiObjs.length) {
            setHoveredEmoji(emojiObjs[reactionIndex].id);
          } else {
            setHoveredEmoji(null);
          }
        } else {
            setHoveredEmoji(null);
        }
      };
      const handleClick = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        if (y >= 0 && y <= 50) {
          const reactionIndex = Math.floor(x / 50);
          if (reactionIndex >= 0 && reactionIndex < emojiObjs.length) {
            const selectedReaction = emojiObjs[reactionIndex].id;
            onclick(selectedReaction);
          }
        }
      };
    return ( 
        <canvas
            ref={canvasRef}
            width={200} 
            height={50}
            className="reaction-canvas"
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            />
     );
}

export default EmojiCanvas;