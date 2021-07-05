import { Choice } from "kit-bridge/esm/type"
import { getKenvs } from "kit-bridge/esm/util"
import { CLI } from "../cli"

let kitManagementChoices: Choice<keyof CLI>[] = [
  {
    name: "Open kit.log",
    description: `Open ~/.kit/logs/kit.log in ${env.KIT_EDITOR}`,
    value: "kit-log",
  },
  {
    name: "Check for Update",
    description: `Version: ${env.KIT_APP_VERSION}`,
    value: "update",
  },

  {
    name: "View schedule",
    description: "View and edit upcoming jobs",
    value: "schedule",
  },
  {
    name: "System Scripts",
    description: "View and edit system event scripts",
    value: "system-events",
  },
  {
    name: "Open Script Kit at Login",
    description: "Sets Script Kit to launch at login",
    value: "open-at-login",
  },

  {
    name: "Add ~/.kit/bin to $PATH",
    description: `Looks for your profile and appends to $PATH`,
    value: "add-kit-to-profile",
  },
  {
    name: "Change main keyboard shortcut",
    description:
      "Pick a new keyboard shortcut for the main menu",
    value: "change-main-shortcut",
  },
  {
    name: "Change script shortcut",
    description:
      "Pick a new keyboard shortcut for a script",
    value: "change-shortcut",
  },
  {
    name: "Generate bin files",
    description: "Recreate all the terminal executables",
    value: "create-all-bins",
  },

  {
    name: "Change editor",
    description: "Pick a new editor",
    value: "change-editor",
  },

  {
    name: "Clear Kit prompt cache",
    description: "Reset prompt position and sizes",
    value: "kit-clear-prompt",
  },
  (await getKenvs()).length && {
    name: `Remove kenv`,
    description: `Remove a kenv`,
    value: "kenv-rm",
  },
  {
    name: "Created by John Lindquist",
    description: `Follow @johnlindquist on twitter`,
    value: "credits",
    img: kitPath("images", "john.png"),
  },
  {
    name: "Quit",
    description: `Quit Script Kit`,
    value: "quit",
  },
]

let cliScript = await arg(
  `Kit Options`,
  kitManagementChoices
)

await cli(cliScript)

export {}