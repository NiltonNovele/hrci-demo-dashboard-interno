import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "Painel",
    items: [
      {
        title: "Principal",
        icon: Icons.HomeIcon,
        items: [
          {
            title: "Principal",
            url: "/",
          },
        ],
      },
      {
        title: "Calendar",
        url: "/calendar",
        icon: Icons.Calendar,
        items: [],
      },
      {
        title: "Profile",
        url: "/profile",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Forms",
        icon: Icons.Alphabet,
        items: [
          {
            title: "Form Elements",
            url: "/forms/form-elements",
          },
          {
            title: "Form Layout",
            url: "/forms/form-layout",
          },
        ],
      },
      {
        title: "Solicitações",
        url: "/tables",
        icon: Icons.Table,
        items: [
          {
            title: "Solicitações",
            url: "/tables",
          },
        ],
      },
      {
        title: "Paginas",
        icon: Icons.Alphabet,
        items: [
          {
            title: "configurações",
            url: "/pages/settings",
          },
        ],
      },
    ],
  },
  {
    label: "Outros",
    items: [
      {
        title: "Gráficos",
        icon: Icons.PieChart,
        items: [
          {
            title: "Gráfico Basico",
            url: "/charts/basic-chart",
          },
        ],
      },
      {
        title: "UI Elements",
        icon: Icons.FourCircle,
        items: [
          {
            title: "Alerts",
            url: "/ui-elements/alerts",
          },
          {
            title: "Buttons",
            url: "/ui-elements/buttons",
          },
        ],
      },
      {
        title: "sessão",
        icon: Icons.Authentication,
        items: [
          {
            title: "Entrar",
            url: "/auth/sign-in",
          },
        ],
      },
    ],
  },
];
