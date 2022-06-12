import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {

  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const incrementLike = () => setLike(like+1);
  const incrementDisLike = () => setDisLike(dislike+1);

  return (

    <div className="counters-container">
       <IconButton 
      color="primary"  
      onClick={incrementLike}
      aria-label="Movie-details">
  <Badge badgeContent={like} color="primary">
  👍
</Badge>
</IconButton>

<IconButton 
      color="error"  
      onClick={incrementDisLike}
      aria-label="Movie-details">
  <Badge badgeContent={dislike} color="error">
  👎
</Badge>
</IconButton>

    </div>
  );
}
