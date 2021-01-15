import React, { useState } from 'react';
import { Snackbar, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function SnackbarNoInternet() {
    const [open, setOpen ] = useState(!navigator.onLine);

    setTimeout(() => {
        setOpen(false);
    }, 10 * 1000);

    return (<Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={open}
              message="Momentalisht nuk jeni online. Do ju shfaqen postimet e shikuara se fundmi."
              action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    onClick={() => setOpen(!open)}
                  >
                    <CloseIcon />
                  </IconButton>
              }
            />)
}