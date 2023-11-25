import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { RecipeDetailsProps } from '../types/recipeType';

const RecipeDetails:React.FC<RecipeDetailsProps> = ({ recipeId, recipeDetails, onClose }) => {

  return (
    <Dialog open={!!recipeId} onClose={onClose}>
      <DialogTitle>{recipeDetails?.title}</DialogTitle>
      <DialogContent>
        <p className="font-semibold text-lg">【Summary】</p>
        <p dangerouslySetInnerHTML={{ __html: recipeDetails?.summary || '' }}></p>
        <br/>
        <p className="font-semibold text-lg">【How To Cook】</p>
        <p dangerouslySetInnerHTML={{ __html: recipeDetails?.instructions || '' }}></p>
        <br/>
        <p className="font-semibold text-lg">【URL】</p>
        <a href={recipeDetails?.sourceUrl} target="_blank" rel="noopener noreferrer">
          {recipeDetails?.sourceUrl}
        </a>
        <br/>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RecipeDetails

