import styles from './ToolbarBackground.module.css';
import { faDownload, faGlobe, faRetweet } from '@fortawesome/free-solid-svg-icons'
import ColorPicker from '../colorPicker/ColorPicker';
import Button from '../button/Button';
import { RefObject, useRef } from 'react';
import { useStateBackgroungColor } from './useStateBackgroungColor';
import { AppDispatch, RootState } from '../../../../store/store';
import { inputBackgroundColor, resetBackground, setBackgroundColor } from '../../../../store/actionCreators/canvasActionCreators';
import { connect } from 'react-redux';
import { Background as BackgroundType } from '../../../../store/types';

type ToolbarBackgroundProps = {
  resetBackground: () => void,
  inputBackgroundColor: (color: string) => void,
  setBackgroundColor: (color: string) => void,
  background: BackgroundType,
}

function ToolbarBackground(props: ToolbarBackgroundProps) {
  const inputColor = useRef<HTMLInputElement>(null);
  const buttonReset = useRef<HTMLButtonElement>(null);
  useStateBackgroungColor(
    props.resetBackground,
    props.inputBackgroundColor,
    props.setBackgroundColor,
    props.background,
    inputColor,
    buttonReset
  );
  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbar__row}>
        <div className={styles.toolbar__col1}>
          <div className={styles.button_container}>
            <Button
              label="C компьютера"
              title="C компьютера"
              icon={faDownload}
            />
            <Button
              label="Из Pixels"
              title="Из Pixels"
              icon={faGlobe}
            />
          </div>
        </div>
        <div className={styles.toolbar__col2}>
          <div className={styles.colorPickerBox}>
            <ColorPicker ref={inputColor as RefObject<HTMLInputElement>} />
          </div>
          <Button
            label="Сброс"
            title="Сброс"
            icon={faRetweet}
            ref={buttonReset as RefObject<HTMLButtonElement>}
          />
        </div>
      </div>
      <label className={styles.toolbar__label}>Фон</label>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  background: state.canvas.background, 
})


const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    resetBackground: () => dispatch(resetBackground()),
    inputBackgroundColor: (color: string) => dispatch(inputBackgroundColor(color)),
    setBackgroundColor: (color: string) => dispatch(setBackgroundColor(color)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarBackground);
