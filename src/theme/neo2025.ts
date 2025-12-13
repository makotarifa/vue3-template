import { definePreset } from "@primevue/themes";
import Lara from "@primevue/themes/lara";

const Neo2025 = definePreset(Lara, {
  primitive: {
    borderRadius: {
      none: "0",
      xs: "0.375rem",
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "9999px",
    },
  },
  semantic: {
    primary: {
      50: "#e6faff",
      100: "#c9f3ff",
      200: "#9fe9ff",
      300: "#6fdbff",
      400: "#3fcdfb",
      500: "#19bdf2",
      600: "#0ea5e9",
      700: "#0284c7",
      800: "#0369a1",
      900: "#0b4d78",
      950: "#072f49",
    },
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      dark: {
        surface: {
          0: "#ffffff",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
    },
  },
  components: {
    button: {
      colorScheme: {
        light: {
          root: {
            primary: {
              background: "{primary.600}",
              hoverBackground: "{primary.500}",
              activeBackground: "{primary.700}",
              color: "#ffffff",
            },
          },
        },
        dark: {
          root: {
            primary: {
              background: "{primary.500}",
              hoverBackground: "{primary.400}",
              activeBackground: "{primary.600}",
              color: "{primary.950}",
            },
          },
        },
      },
    },
    card: {
      colorScheme: {
        light: {
          root: {
            borderRadius: "{borderRadius.lg}",
            background: "rgba(255,255,255,0.08)",
            borderColor: "rgba(255,255,255,0.10)",
          },
        },
        dark: {
          root: {
            borderRadius: "{borderRadius.lg}",
            background: "rgba(255,255,255,0.08)",
            borderColor: "rgba(255,255,255,0.10)",
          },
        },
      },
    },
    dialog: {
      colorScheme: {
        light: {
          root: {
            borderRadius: "{borderRadius.lg}",
            background: "rgba(255,255,255,0.08)",
            borderColor: "rgba(255,255,255,0.10)",
          },
        },
        dark: {
          root: {
            borderRadius: "{borderRadius.lg}",
            background: "rgba(255,255,255,0.08)",
            borderColor: "rgba(255,255,255,0.10)",
          },
        },
      },
    },
    inputtext: {
      colorScheme: {
        light: {
          root: {
            borderRadius: "{borderRadius.md}",
            background: "rgba(255,255,255,0.08)",
            color: "#ffffff",
            borderColor: "rgba(255,255,255,0.15)",
          },
        },
        dark: {
          root: {
            borderRadius: "{borderRadius.md}",
            background: "rgba(255,255,255,0.08)",
            color: "#ffffff",
            borderColor: "rgba(255,255,255,0.15)",
          },
        },
      },
    },
    password: {
      colorScheme: {
        light: {
          root: {
            borderRadius: "{borderRadius.md}",
            background: "rgba(255,255,255,0.08)",
            color: "#ffffff",
            borderColor: "rgba(255,255,255,0.15)",
          },
        },
        dark: {
          root: {
            borderRadius: "{borderRadius.md}",
            background: "rgba(255,255,255,0.08)",
            color: "#ffffff",
            borderColor: "rgba(255,255,255,0.15)",
          },
        },
      },
    },
    checkbox: {
      colorScheme: {
        light: {
          root: {
            borderRadius: "{borderRadius.md}",
          },
        },
        dark: {
          root: {
            borderRadius: "{borderRadius.md}",
          },
        },
      },
    },
    tag: {
      colorScheme: {
        light: {
          root: {
            borderRadius: "{borderRadius.xl}",
            background: "rgba(255,255,255,0.12)",
            color: "#ffffff",
            borderColor: "rgba(255,255,255,0.15)",
          },
        },
        dark: {
          root: {
            borderRadius: "{borderRadius.xl}",
            background: "rgba(255,255,255,0.12)",
            color: "#ffffff",
            borderColor: "rgba(255,255,255,0.15)",
          },
        },
      },
    },
    chip: {
      colorScheme: {
        light: {
          root: {
            borderRadius: "{borderRadius.xl}",
            background: "rgba(255,255,255,0.12)",
            color: "#ffffff",
            borderColor: "rgba(255,255,255,0.15)",
          },
        },
        dark: {
          root: {
            borderRadius: "{borderRadius.xl}",
            background: "rgba(255,255,255,0.12)",
            color: "#ffffff",
            borderColor: "rgba(255,255,255,0.15)",
          },
        },
      },
    },
    selectbutton: {
      colorScheme: {
        light: {
          root: {
            borderRadius: "{borderRadius.xl}",
          },
        },
        dark: {
          root: {
            borderRadius: "{borderRadius.xl}",
          },
        },
      },
    },
    toggleswitch: {
      colorScheme: {
        light: {
          root: {
            borderRadius: "{borderRadius.xl}",
          },
        },
        dark: {
          root: {
            borderRadius: "{borderRadius.xl}",
          },
        },
      },
    },
  },
});

export default Neo2025;
