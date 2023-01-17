import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const FetchingScreen = (props) => {
  return (
    <Backdrop
      sx={{ color: "var(--blue-green)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.isFetching || false}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default FetchingScreen