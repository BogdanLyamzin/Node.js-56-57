import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.scss";

const modalRoot = document.getElementById("modal-root");

const Modal = ({close, children}) => {
    const  handleClose = ({target, currentTarget, code}) => {
        if(target === currentTarget || code === "Escape") {
            console.log("close");
            close()
        }
    }

    useEffect(()=> {
        document.body.addEventListener("keydown", handleClose);

        return ()=> document.body.removeEventListener("keydown", handleClose);
        // const func = document.body.removeEventListener("keydown", handleClose);
        // if("unmount component") func()
    }, [])

    return createPortal(
        (
            <div onClick={handleClose} className={styles.overlay}>
                <div className={styles.modal}>
                    <span onClick={close} className={styles.close}>X</span>
                    {children}
                </div>
            </div>
        ),
        modalRoot
    )
}

export default Modal;

/*
class Modal extends Component {

    componentDidMount(){
        document.body.addEventListener("keydown", this.handleClose);
    }

    componentWillUnmount() {
        document.body.removeEventListener("keydown", this.handleClose);
    }

    handleClose = ({target, currentTarget, code}) => {
        if(target === currentTarget || code === "Escape") {
            console.log("close");
            this.props.close()
        }
    }
    render() {
        const { children, close } = this.props;

        return createPortal(
            (
                <div onClick={this.handleClose} className={styles.overlay}>
                    <div className={styles.modal}>
                        <span onClick={close} className={styles.close}>X</span>
                        {children}
                    </div>
                </div>
            ),
            modalRoot
        )
    }
}
*/
