import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import TippyUploadIcon from '@tippyjs/react';
import TippyMessageIcon from '@tippyjs/react';
import TippyActivityIcon from '@tippyjs/react';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { ActivityIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'ge',
          title: 'Germani',
        },
        {
          type: 'language',
          code: 'br',
          title: 'Brazil',
        },
        {
          type: 'language',
          code: 'ko',
          title: 'Korean',
        },
        {
          type: 'language',
          code: 'ja',
          title: 'Japan',
        },
        {
          type: 'language',
          code: 'in',
          title: 'Indonesia',
        },
        {
          type: 'language',
          code: 'india',
          title: 'India',
        },
        {
          type: 'language',
          code: 'jak',
          title: 'Jakartar',
        },
        {
          type: 'language',
          code: 'in',
          title: 'Indonesia',
        },
        {
          type: 'language',
          code: 'india',
          title: 'India',
        },
        {
          type: 'language',
          code: 'jak',
          title: 'Jakartar',
        },
        {
          type: 'language',
          code: 'in',
          title: 'Indonesia',
        },
        {
          type: 'language',
          code: 'india',
          title: 'India',
        },
        {
          type: 'language',
          code: 'jak',
          title: 'Jakartar',
        },
        {
          type: 'language',
          code: 'in',
          title: 'Indonesia',
        },
        {
          type: 'language',
          code: 'india',
          title: 'India',
        },
        {
          type: 'language',
          code: 'jak',
          title: 'Jakartar',
        },
        {
          type: 'language',
          code: 'in',
          title: 'Indonesia',
        },
        {
          type: 'language',
          code: 'india',
          title: 'India',
        },
        {
          type: 'language',
          code: 'jak',
          title: 'Jakartar',
        },
        {
          type: 'language',
          code: 'in',
          title: 'Indonesia',
        },
        {
          type: 'language',
          code: 'india',
          title: 'India',
        },
        {
          type: 'language',
          code: 'jak',
          title: 'Jakartar',
        },
        {
          type: 'language',
          code: 'in',
          title: 'Indonesia',
        },
        {
          type: 'language',
          code: 'india',
          title: 'India',
        },
        {
          type: 'language',
          code: 'jak',
          title: 'Jakartar',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shotcuts',
  },
];

function Header() {
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '@li',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coins',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to={routesConfig.home}>
            <img src={images.logo_black} alt="Logo" />
          </Link>
        </div>

        {/* Search */}
        <Search />

        <div className={cx('action')}>
          {currentUser ? (
            <>
              <TippyUploadIcon
                delay={[0, 200]}
                content="Upload Video"
                placement="bottom"
              >
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </TippyUploadIcon>
              <TippyMessageIcon
                delay={[0, 200]}
                content="Message"
                placement="bottom"
              >
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </TippyMessageIcon>
              <TippyActivityIcon
                delay={[0, 200]}
                content="Activity"
                placement="bottom"
              >
                <button className={cx('action-btn')}>
                  <ActivityIcon />
                </button>
              </TippyActivityIcon>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d87fd6d27361100916129fb4c864b83e~tplv-tiktokx-cropcenter:100:100.webp?dr=14579&refresh_token=241da4c0&x-expires=1742630400&x-signature=rJeI%2B3o2DTKfGx%2BQUPHdQ3RObeU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=fdd36af4&idc=my"
                alt="AAA"
                fallback="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/98616dad8f59b458715ec3200a786106~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=351aef2b&x-expires=1742968800&x-signature=dOSePapmvAl27vvvs0n%2FWgE8xkE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
              // {/* <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>AAA</Button> */}
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
