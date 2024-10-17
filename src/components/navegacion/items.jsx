import {
    FaFacebook,
    FaXTwitter,
    FaInstagram,
    FaTiktok,
    FaTelegram,
    FaYoutube,
    FaPinterest,
  } from "react-icons/fa6";

import {
  FaHome,
  FaPen,
  FaCamera,
  FaLaptopCode,
  FaPrint,
  FaChalkboardTeacher,
  FaInfoCircle,
  FaMailBulk,
  FaBriefcase,
  FaNewspaper,
  FaDownload,
  FaBook,
  FaShoppingBag,
  FaVideo,
} from "react-icons/fa";
  export const menu = [
    { name: "Blog", href: "/blog" },
    { name: "Tienda", href: "/tienda" },
    { name: "Cursos", href: "/cursos" },
  ];
  export const soporte = [
    { name: "Contacto", href: "/contacto" },
    { name: "Envios", href: "/envios" },
    { name: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
  ];
  export const compania = [
    { name: "Nosotros", href: "/sobre-nosotros" },
    { name: "Recursos", href: "/recursos" },
    { name: "Vacantes", href: "/bolsa-de-trabajo" },
  ];
  export const legal = [
    { name: "Facturación", href: "/facturacion" },
    { name: "Aviso de Privacidad", href: "/privacidad" },
    { name: "Términos y Condiciones", href: "/terminos" },
  ];
  export const social = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/CreadoresCreativos.MX",
      icon: () => <FaFacebook />,
    },
    {
      name: "X-Twitter",
      href: "https://www.twitter.com/Creadores_Creat",
      icon: () => <FaXTwitter />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/creadores_creat",
      icon: () => <FaInstagram />,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@emprendedorescreativos2018",
      icon: () => <FaYoutube />,
    },
    {
      name: "Telegram",
      href: "https://t.me/+8q0-Zd0_u3kzYWU5",
      icon: () => <FaTelegram />,
    },
  
    {
      name: "Pinterest",
      href: "https://www.pinterest.com.mx/emprendedorescreativos2019/",
      icon: () => <FaPinterest />,
    },
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/@emprendedores_creativos",
      icon: () => <FaTiktok />,
    },
  ];

  export const servicios = [
    {
      name: "Diseño Gráfico",
      href: "/diseno-grafico",
      icon: <FaPen />,
    },
    {
      name: "Fotografía",
      href: "/fotografia",
      icon: <FaCamera />,
    },
    {
      name: "Diseño y Desarrollo Web",
      href: "/diseno-y-desarrollo-web",
      icon: <FaLaptopCode />,
    },
    {
      name: "Impresión",
      href: "/impresion",
      icon: <FaPrint />,
    },
    {
      name: "Asesorias",
      href: "/asesorias",
      icon: <FaChalkboardTeacher />,
    },
  ];
  
  export const company = [
    {
      name: "Sobre Nosotros",
      href: "/sobre-nosotros",
      icon: <FaInfoCircle />,
    },
    {
      name: "Contacto",
      href: "/contacto",
      icon: <FaMailBulk />,
    },
    {
      name: "Recursos",
      href: "/recursos",
      icon: <FaDownload />,
    },
    {
      name: "Vacantes",
      href: "/bolsa-de-trabajo",
      icon: <FaBriefcase />,
    },
    {
      name: "Responsabilidad Social",
      href: "/responsabilidad-social",
      icon: <FaNewspaper />,
    },
  ];

export const SideMenu = [
  {
    id: '1',
    category: 'home',
    items: [
      {
        id:   '1',
        name: 'Inicio',
        icon2: <FaHome/>,
        href: '/',
      },
      {
        id:   '2',
        name: 'Blog',
        icon2: <FaBook/>,
        href: '/blog',
      },
      {
        id:   '3',
        name: 'Tienda',
        icon2: <FaShoppingBag/>,
        href: '/tienda',
      },
      {
        id:   '4',
        name: 'Cursos',
        icon2: <FaVideo/>,
        href: '/cursos',
      },
    ]
  },
  {
    id: '2',
    category: 'servicios',
    items: [
      {
        id:   '1',
        name: 'Diseño Gáfico',
        icon2: <FaPen/>,
        href: '/diseno-grafico',
      },
      {
        id:   '2',
        name: 'Fotografía',
        icon2: <FaCamera/>,
        href: '/fotografia',
      },
      {
        id:   '3',
        name: 'Diseño y Desarrollo Web',
        icon2: <FaLaptopCode/>,
        href: '/diseno-y-desarrollo-web',
      },
      {
        id:   '4',
        name: 'Asesorias',
        icon2: <FaChalkboardTeacher/>,
        href: '/asesorias',
      },
    ]
  },
  {
    id: '3',
    category: 'empresa',
    items: [
      {
        id:   '1',
        name: 'Sobre Nosotros',
        icon2: <FaInfoCircle/>,
        href: '/sobre-nosotros',
      },
      {
        id:   '2',
        name: 'Contacto',
        icon2: <FaMailBulk/>,
        href: '/contacto',
      },
      {
        id:   '3',
        name: 'Recursos',
        icon2: <FaDownload/>,
        href: '/recursos',
      },
      {
        id:   '4',
        name: 'Resposabilidad Social',
        icon2: <FaNewspaper/>,
        href: '/resposabilidad-social',
      },
    ]
  },
];
