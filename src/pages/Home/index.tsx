import { useEffect, useState, useMemo, ChangeEvent, FocusEvent } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Copy,
  Image,
  List,
  Quote,
  Table,
  Modal,
  Input,
  TextArea,
  Button,
  Toast,
  Icons,
  CheckBox,
} from "../../components";
import { tableData, images } from "../../utils/contsants";
import { morePhotos, regexpList } from "../../utils";
import { ToastModes } from "../../types";
import styles from "./app.module.scss";

function App() {
  const location = useLocation();
  const [displayedCount, setDisplayedCount] = useState(6);
  const [zoomImage, setZoomImage] = useState(-1);
  const initialGallery = useMemo(
    () => images.slice(0, displayedCount),
    [displayedCount]
  );
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    privacy_policy_agreement: false,
  });
  const [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState<{
    show: boolean;
    mode: ToastModes;
    text: React.ReactNode;
  }>({
    show: false,
    mode: "empty",
    text: "Письмо для активации аккаунта успешно отправлено на адрес электронной почты, который вы указали при регистрации.",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = event.target.name;
    setFormData({ ...formData, [key]: event.target.value });
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const mapDisplayValue = {
      email: "электронной почты",
      phone: "телефон (+37498888888)",
      name: "имя",
    };
    const type = event.target.name;
    if (event.target.value === "") {
      setError({ ...error, [type]: "Пожалуйста, заполните это поле." });
      return;
    }

    if (
      !!regexpList[type as keyof typeof regexpList] &&
      !regexpList[type as keyof typeof regexpList]?.test?.(event.target.value)
    ) {
      setError({
        ...error,
        [type]: `Неверный формат ${
          mapDisplayValue[type as keyof typeof mapDisplayValue]
        }`,
      });
    } else setError({ ...error, [type]: "" });
  };

  useEffect(() => {
    if (location.hash || location.hash === "") {
      const element = document.querySelector(
        location.hash === ""
          ? "[data-autoscroll-id]"
          : `[data-autoscroll-id='${location.hash.slice(1)}']`
      );
      if (element) {
        const { top } = element.getBoundingClientRect();
        const desiredTopPosition = window.pageYOffset + top - 90;
        window.scrollTo({ top: desiredTopPosition, behavior: "smooth" });
      }
    }
  }, [location]);

  const checkValidation = () => {
    let valid: boolean[] = [];
    const { privacy_policy_agreement, ...restFormData } = formData;
    if (!privacy_policy_agreement) return true;

    Object.keys(restFormData).forEach((k) => {
      if (!!regexpList[k as keyof typeof regexpList]) {
        valid.push(
          !regexpList[k as keyof typeof regexpList]?.test(
            restFormData[k as keyof typeof restFormData]
          )
        );
        return;
      }
      valid.push(!restFormData[k as keyof typeof restFormData].length);
    });
    return valid.includes(true);
  };

  const handleSubmit = () => {
    setToast({ ...toast, show: true });
    const { privacy_policy_agreement, ...restFormData } = formData;
    const obj = { ...restFormData };

    Object.keys(formData).forEach((k) => {
      obj[k as keyof typeof obj] = "";
    });

    setFormData({ ...obj, privacy_policy_agreement: false });
  };

  return (
    <div className="App">
      <Container
        hash=""
        title={<h1>Тестовое задание</h1>}
        left={
          <p className="p-l">
            Это простое задание,в котором нужно сверстать несколько тестовых
            блоков и галерею. Ожидаем что все получится аккуратно, особое
            внимание уделим организации кода чтобы потом можно было максимально
            легко переиспользовать и расширять эти простые компоненты.
          </p>
        }
        right={
          <p className={`p ${styles.OpacityText}`}>
            Этот блок с описанием тоже нужно сверстать. Специально использовали
            разные стили и текстовые блоки, даже если они порой неуместны ;{`)`}
          </p>
        }
      />

      <Container
        title={
          <p className="caps-big p-s p-bold">
            текстовые блоки и изображения для галереи
          </p>
        }
        left={
          <Copy value={"https://test.vasya.ru/api/pages/index/"}>
            https://test.vasya.ru/api/pages/index/
          </Copy>
        }
        right={
          <p className="p-s">
            Будет круто, если по клику на желтый блок, соответствующая ссылка
            сразу скопируется в буфер обмена и пользователь получит какое-то
            максимально естественное уведомление что у него теперь в буфере эта
            ссылка.
          </p>
        }
        seperat="half"
        hash="text_blocks"
      />

      <Container
        title={<h3>Заголовок статичного блока</h3>}
        left={
          <p className="p">
            Анализ зарубежного опыта транслирует целевой сегмент рынка, повышая
            конкуренцию. Создание приверженного покупателя, вопреки мнению
            П.Друкера, отражает фирменный стиль, полагаясь на инсайдерскую
            информацию. Цена клика оправдывает выставочный стенд. Еще Траут
            показал, что точечное воздействие стремительно специфицирует
            рейтинг. <br /> <br /> Привлечение аудитории осмысленно
            переворачивает сегмент рынка, осознав маркетинг как часть
            производства. Потребление без оглядки на авторитеты транслирует
            имидж предприятия. Практика однозначно показывает, что фокусировка
            последовательно продуцирует популярный SWOT-анализ. Социальный
            статус спонтанно притягивает диктат потребителя. Сервисная стратегия
            индуцирует рекламоноситель. VIP-мероприятие, суммируя приведенные
            примеры, настроено позитивно.
          </p>
        }
      >
        <div className={styles.GalleryWrapper}>
          {images.slice(0, 4).map((img, indx) => (
            <Image src={img.src} alt={img.alt} key={img.alt} onClickImg={() => setZoomImage(indx)} />
          ))}
        </div>
      </Container>

      <Container
        title={<h3>Второй статичный блок</h3>}
        left={
          <div>
            <p className="p">
              Продукт, на первый взгляд, индуцирует конструктивный традиционный
              канал. Наряду с этим, начальная стадия проведения исследования
              изоморфна времени. Макет по-прежнему устойчив к изменениям спроса.
            </p>
            <List
              mode="circle"
              items={[
                "Маркетинг довольно хорошо сбалансирован",
                "Поисковая реклама индуцирует повседневный потребительский рынок",
                "Рекламная заставка программирует нишевый проект",
                "Согласно предыдущему, стратегическое планирование синхронизирует сублимированный выставочный стенд. Рекламная заставка программирует нишевый проект. Рекламное сообщество тормозит ролевой пресс-клиппинг, невзирая на действия конкурентов. ",
                "Искусство медиапланирования масштабирует инвестиционный продукт",
              ]}
            />
            <p className="p">Еще может быть нумерованный список:</p>
            <List
              mode="number"
              items={[
                "Маркетинг довольно хорошо сбалансирован",
                "Поисковая реклама индуцирует повседневный потребительский рынок",
                "Рекламная заставка программирует нишевый проект",
                "Согласно предыдущему, стратегическое планирование синхронизирует сублимированный выставочный стенд. Рекламная заставка программирует нишевый проект. Рекламное сообщество тормозит ролевой пресс-клиппинг, невзирая на действия конкурентов. ",
                "Искусство медиапланирования масштабирует инвестиционный продукт",
              ]}
            />
          </div>
        }
        right={
          <p className={`p ${styles.OpacityText} ${styles.PositionUpRight}`}>
            Рекламный макет, согласно Ф.Котлеру, развивает связанный процесс
            стратегического планирования. Воздействие на потребителя,
            пренебрегая деталями, настроено позитивно. Медийная связь тормозит
            BTL.
          </p>
        }
      />

      <Container
        title={<h3>Третий статичный блок</h3>}
        left={
          <div>
            <p className="p">
              Инвариант трансформирует драматизм. Асинхронность эволюции видов,
              в первом приближении, готично иллюстрирует бессознательный
              драматизм, так Г.Корф формулирует собственную антитезу. Теория
              наивного и сентиментального искусства иллюстрирует комплекс
              априорной бисексуальности. Синтез искусств готично дает мимезис.
              Монтаж неравномерен.
            </p>
            <div className={styles.QuoteWrapper}>
              <Quote
                text={
                  <>
                    Очевидно, что горизонт ожидания монотонно иллюстрирует
                    первоначальный драматизм. Эзотерическое потенциально.
                    Миракль, согласно традиционным представлениям, имитирует
                    незначительный драматизм, таким образом, сходные законы
                    контрастирующего развития характерны и для процессов в
                    психике. Типическое случайно.
                  </>
                }
              />
            </div>
            <p className="p">
              Психологический параллелизм, по определению, иллюстрирует базовый
              тип личности. Художественная контаминация диссонирует
              экзистенциализм, таким образом, второй комплекс движущих сил
              получил разработку.
            </p>
            <div className={styles.TableBlock}>
              <Table
                head={tableData.head}
                body={tableData.body}
                className={styles.HomeTable}
              />
            </div>
          </div>
        }
      />

      <Container
        title={<h2>Галерея с изображениями</h2>}
        left={
          <p className="p-l">
            Все просто. Выводится столько фотографий сколько влезит на экран. Те
            что не влезли рассчитываются и выводится их количество над последней
            фотографией. По клику на эту подпись так же открывается увеличенное
            версия того изображения, над которым выводится подпись.
          </p>
        }
        hash="gallery"
      >
        <div className={styles.GallerySection}>
          <div className={styles.Gallery}>
            {initialGallery.map((img, indx) => (
              <Image
                src={img.src}
                alt={img.alt}
                key={img.alt}
                desc={
                  indx === initialGallery.length - 1
                    ? morePhotos.checkMore(initialGallery, images)
                    : undefined
                }
                onClickDesc={() => setDisplayedCount(displayedCount + 6)}
                onClickImg={() => setZoomImage(indx)}
              />
            ))}
          </div>

          <p className="p w-80">
            Для того, чтобы на странице мы выводили изображение фактического
            нужного размера, а не просто уменьшали заведомо большее изображения,
            есть такая возможность:
          </p>
          <div className="w-80">
            <Copy
              value={
                "https://test.vasya.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center"
              }
            >
              https://test.vasya.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center
            </Copy>
          </div>

          <p className="p-s w-80">
            В параметре <strong className="p-bold">geometry</strong> можно
            задать размеры для изображения, а в crop выбрать тип кадрирования{" "}
            <strong className="p-bold">(center, top, bottom)</strong> или вообще
            его не указывать и тогда изображение пропорционально будет «вписано»
            в указнные размеры.
          </p>
        </div>
      </Container>

      <div className={styles.FormSection} data-autoscroll-id="form">
        <div className={styles.FormImage}>
          <Image src="/images/img.jpg" alt="img" />
        </div>
        <div className={styles.FormWrapper}>
          <h2>Форма с приветами</h2>

          <div className={styles.InnerContainer}>
            <Input
              placeholder="Ваше имя"
              inputSize="big"
              value={formData.name}
              name="name"
              onChange={handleChange}
              error={error.name}
              type="text"
              onBlur={handleBlur}
            />
            <p className="p">
              Имя нас не сильно волнует и это поле необязательное
            </p>
          </div>

          <div className={styles.InnerContainer}>
            <Input
              placeholder="Телефон"
              boldText={true}
              inputSize="big"
              value={formData.phone}
              name="phone"
              onChange={handleChange}
              error={error.phone}
              onBlur={handleBlur}
            />
            <p className="p">Для телефона нужна маска для ввода</p>
          </div>

          <div className={styles.InnerContainer}>
            <Input
              placeholder="Электронная почта"
              boldText={true}
              inputSize="big"
              value={formData.email}
              name="email"
              onChange={handleChange}
              error={error.email}
              type="email"
              onBlur={handleBlur}
            />
            <p className="p">
              Почту нужно валидировать, что пользователь точно указал адекватный
              и похожий на настоящий адрес
            </p>
          </div>

          <div className={styles.InnerContainer}>
            <TextArea
              placeholder="Сообщение"
              name="message"
              boldText={true}
              value={formData.message}
              error={error.message}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <p className="p">Без сообщения форму отправлять бессмысленно</p>
          </div>

          <div className={styles.InnerContainer}>
            <div className={styles.PrivacePolicy}>
              <CheckBox
                value={formData.privacy_policy_agreement}
                label="Согласен с правилами обработки моих персональных данных"
                onChange={(v: boolean) =>
                  setFormData({ ...formData, privacy_policy_agreement: v })
                }
              />
            </div>
            <p className="p">
              Форма отправляется только, если отметка с согласием стоит
            </p>
          </div>

          <div className={styles.InnerContainer}>
            <div className={styles.SubmitBtn}>
              <Button disabled={checkValidation()} onClick={handleSubmit}>
                Отправить сообщение
              </Button>
            </div>
            <p className="p">
              У кнопки несколько состояний. Яркой и синей она становится когда
              все нормально и форму можно отправлять.
            </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={zoomImage !== -1}
        onClose={() => setZoomImage(-1)}
        contentClassName={styles.ZoomImage}
      >
        <div>
          <Image
            src={initialGallery[zoomImage]?.src}
            alt={initialGallery[zoomImage]?.alt}
          />
        </div>
      </Modal>

      {!!toast.show && (
        <Toast
          mode={toast.mode}
          text={toast.text}
          onClose={() => setToast({ ...toast, show: false })}
          config={{ autoclose: true, time: 2000 }}
          icon={<Icons.Success />}
        />
      )}
    </div>
  );
}

export default App;
