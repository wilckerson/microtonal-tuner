import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

interface ConfirmDialogProps {
  title: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onClose: () => void;
  open: boolean;
}
function ConfirmDialog(props: ConfirmDialogProps) {
  function handleCancel() {
    props.onClose();
  }

  function handleConfirm() {
    if (props.onConfirm) {
      props.onConfirm();
    } else {
      props.onClose();
    }
  }

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      open={props.open}
    >
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>{props.message}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          {props.cancelText || "No"}
        </Button>
        <Button onClick={handleConfirm} color="primary">
          {props.confirmText || "Yes"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
