import { create } from "zustand";

type RegisterModalStore = {
  isOpen: boolean; 
  onOpen: () => void; 
  onClose: () => void; 
};

/**
 * RegisterModalを使用するためのhooks
 */
const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false, // モダールの初期状態(閉じた状態)
  onOpen: () => set({ isOpen: true }), //　モーダルを開く処理
  onClose: () => set({ isOpen: false }), // モーダルを閉じる処理
}));

export default useRegisterModal;
