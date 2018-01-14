import { changeCompose } from '../actions/compose';



export const UTILBTNS_RISA = 'UTILBTNS_RISA';
export const UTILBTNS_GOJI = 'UTILBTNS_GOJI';
export const UTILBTNS_HARUKIN = 'UTILBTNS_HARUKIN';

export function submitRisa (textarea) {
  return function (dispatch, getState) {
    let text = `@RISA ${textarea.value}`;

    dispatch(submitRisaRequest());
    dispatch(changeCompose(text));

    textarea.focus();
  }
}

export function submitRisaRequest () {
  return {
    type: UTILBTNS_RISA
  }
}

export function submitGoji (textarea) {
  return function (dispatch, getState) {
    if (!textarea.value) {
      let text = [
        "#誤字に淫夢厨",
        ":goji:"
      ].join("\r\n");

      dispatch(submitGojiRequest());
      dispatch(changeCompose(text));

      textarea.focus();
    }
  }
}

export function submitGojiRequest () {
  return {
    type: UTILBTNS_GOJI
  }
}

export function submitHarukin (textarea) {
  return function (dispatch, getState) {
    if (!textarea.value) {
      let text = "";

      let quantity = Math.round(Math.random() * 6 + 1),
        type = Math.round(Math.random() + 1);

      let harukin = "";

      switch (type) {
        case 1:
          harukin = ":harukin: ";
          break;

        case 2:
          harukin = ":harukin_old: ";
          break;
      }

      switch (quantity) {
        default:
          text = [
            harukin.repeat(quantity),
            "🔥 ".repeat(quantity)
          ].join("\r\n");

          break;
          
        case 7:
          text = `${harukin}💕\r\n`.repeat(6);
          break;
      }

      dispatch(submitHarukinRequest());
      dispatch(changeCompose(text));

      textarea.focus();
    }
  }
}

export function submitHarukinRequest () {
  return {
    type: UTILBTNS_HARUKIN
  }
}
