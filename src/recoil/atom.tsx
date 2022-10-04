import { currentModal } from "@data/currentModalState";
import { atom } from "recoil";

export interface signUpConditionProps {
  email: false;
  password: false;
  nickName: false;
  subject: false;
}

export const signUpConditionAtom = atom<signUpConditionProps>({
  key: "signUpCondition",
  default: { email: false, password: false, nickName: false, subject: false },
});

export const openModalAtom = atom<boolean>({
  key: "isModalOpen",
  default: false,
});

export const modalState = atom<currentModal>({
  key: "currentModalPage",
  default: currentModal.NONE,
});
