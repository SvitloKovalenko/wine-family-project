import { FC, useState } from "react";
import Image from "next/image";
import { Baskervville } from "next/font/google";
import styles from "./Home.module.scss";
import Layout from "@/components/layout/Layout";
import { Modal } from "@/components/modal/Modal";
import { Button } from "@/components/modal/Button/Button";

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
});
interface ModalState {
  modal: boolean;
}

const Home: FC = () => {
  const [modal, setModal] = useState<ModalState>({ modal: false });

  const handleModalClose = () => {
    setModal({ modal: false });
  };

  return (
    <Layout>
      <div className={styles.home}>
        <div className={styles.titles}>
          <h1 className={baskervville.className}>
            Wine <br />
            Family
          </h1>
          <h3>
            Вино, що запам'ятовується: перевершуйте смакові межі з нашими
            сомельє
          </h3>
        </div>
        <div>
          <Button
            onClick={() =>
              setModal({
                ...modal,
                modal: true,
              })
            }
            text='ЗАМОВИТИ ЗВОРОТНІЙ ДЗВІНОК'
          />
          <Modal
            onModalClose={handleModalClose}
            closeBtn={modal.modal}
            header="Залиште заявку за формою нижче і ми з Вами зв'яжемось"
          />
        </div>
      </div>
    </Layout>
  );
};
export default Home;
