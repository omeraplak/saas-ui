# @saas-ui/react

## 1.2.1

### Patch Changes

- Fall back to label prop in password forms
- Updated dependencies
  - @saas-ui/auth@1.1.1

## 1.2.0

### Minor Changes

- 1ff5f3a: Auth forms field labels can now be customized, thanks to @nadiles.

### Patch Changes

- e14c2e1: Make sure FormStep onSubmit does not throw an error when no promise is returned.
- 273c10d: Fixed a typo in the AuthForm styles provider.
- 8d03628: PasswordInput width now applied to the FormGroup element.
- Updated dependencies [1ff5f3a]
- Updated dependencies [e14c2e1]
- Updated dependencies [273c10d]
- Updated dependencies [8d03628]
  - @saas-ui/auth@1.1.0
  - @saas-ui/forms@1.0.3
  - @saas-ui/password-input@1.0.2
  - @saas-ui/modals@1.0.5

## 1.1.2

### Patch Changes

- Updated dependencies [7bb5d3f]
  - @saas-ui/provider@1.0.2
  - @saas-ui/layout@1.0.2
  - @saas-ui/menu@1.0.2
  - @saas-ui/auth@1.0.5
  - @saas-ui/data-table@1.0.2
  - @saas-ui/modals@1.0.4

## 1.1.1

### Patch Changes

- 7298059: Added new useSteps hook.
- Updated dependencies [7298059]
  - @saas-ui/hooks@1.0.1
  - @saas-ui/auth@1.0.4

## 1.1.0

### Minor Changes

- 2c058b4: The Saas UI theme now uses InterVariable instead of Inter by default.

### Patch Changes

- Updated dependencies [2c058b4]
- Updated dependencies [cf99f38]
  - @saas-ui/theme@1.1.0
  - @saas-ui/hotkeys@1.0.1
  - @saas-ui/provider@1.0.1
  - @saas-ui/layout@1.0.1
  - @saas-ui/menu@1.0.1
  - @saas-ui/auth@1.0.3
  - @saas-ui/data-table@1.0.1
  - @saas-ui/modals@1.0.3

## 1.0.2

### Patch Changes

- Updated dependencies [fe754e6]
- Updated dependencies [fe1e333]
  - @saas-ui/forms@1.0.2
  - @saas-ui/input-right-button@1.0.1
  - @saas-ui/auth@1.0.2
  - @saas-ui/modals@1.0.2
  - @saas-ui/password-input@1.0.1

## 1.0.1

### Patch Changes

- fe10fc8: BannerContent flexDirection set to column on small screens.
- 3ce1dee: Support JSONSchema title in field resolvers
- 150efb2: Select field focus styles now consistent with Input fields.
- 4a37ca7: Fixed @chakra-ui/system dependency version.
- Updated dependencies [fe10fc8]
- Updated dependencies [3ce1dee]
- Updated dependencies [150efb2]
- Updated dependencies [3f928c2]
  - @saas-ui/banner@1.0.1
  - @saas-ui/forms@1.0.1
  - @saas-ui/modals@1.0.1
  - @saas-ui/auth@1.0.1

## 1.0.0

### Major Changes

- 3ae6be1: breaking: Updated to Chakra UI 2.1
- 3ae6be1: breaking: React 18 support.
- 532a7d4: Updated to Chakra UI 2.2.1

### Patch Changes

- 68c7b62: Card now has a isHoverable property to support hover styles.
- c8621b8: NativeSelect now accepts chilren and doesn't throw if no options are passed.
- fca06e4: Added Json Schema (ajv) support for AutoForm.
- da3c4e4: Added ErrorBoundary component.
- de0dce2: Scale reset button icon based on the input size.
- 6cc9343: Add exports entry for ajv
- 15c3960: Re-publish.
- 1744543: Updated dependencies.
- bd3438d: FormStep now supports an onSubmit handler.
- 6133901: No longer passing down label to input fields.
- dc6376f: Updated all readme files, added better descriptions and links to docs and source code.
- 43dff99: Option labels are now optional.
- 4bb613c: Added new RouterProvider and useActivePath now uses Router context.
- d4afda3: ArrayFieldRowFields now accepts all FormLayout props (#48).
- 9e9c601: Stepper now accepts an onChange handler.
- ddec417: ArrayField no longer passing down items to the container element.
- 43dff99: Field is now correctly typed based on the field type.
- 5a1b92b: Fix vertical orientation for FormStepper.
- 1fdf52a: Modern bundles now use .mjs extension.
- 38f7171: #50 - Fixed StepForm render prop types.
- 2ec8c91: Fixed vertical divider rendering incorrectly.
- 8f3f948: Removed redundant ThemeProvider / CSSReset and GlobalStyles components.
- 5f80cea: AutoForm now renders children.
- 532a7d4: Fixed all theme onconsistencies.
- 42beaa4: Added missing dependency.
- 3dee538: Spacing between pin inputs can now be configured.
- 1c247cb: InputField now has type="text" by default.
- 07491fd: ContextMenu now passing down all props to the internal Menu.
- d1fb472: Select now renders a hidden input with the current value.
- 870db1f: New primary and secondary Button variant.
- 68f5d3b: Removed isPrimary and isSecondary Button properties, use variant="primary" instead.
- Updated dependencies [68c7b62]
- Updated dependencies [3ae6be1]
- Updated dependencies [c8621b8]
- Updated dependencies [fca06e4]
- Updated dependencies [de0dce2]
- Updated dependencies [6cc9343]
- Updated dependencies [15c3960]
- Updated dependencies [532a7d4]
- Updated dependencies [1744543]
- Updated dependencies [bd3438d]
- Updated dependencies [6133901]
- Updated dependencies [a8fa78a]
- Updated dependencies [dc6376f]
- Updated dependencies [43dff99]
- Updated dependencies [87d3fdc]
- Updated dependencies [ae47cbd]
- Updated dependencies [4bb613c]
- Updated dependencies [d4afda3]
- Updated dependencies [9e9c601]
- Updated dependencies [ddec417]
- Updated dependencies [a134a6f]
- Updated dependencies [1db5bf9]
- Updated dependencies [4fc04d7]
- Updated dependencies [43dff99]
- Updated dependencies [5a1b92b]
- Updated dependencies [1fdf52a]
- Updated dependencies [1744543]
- Updated dependencies [7a16ef7]
- Updated dependencies [38f7171]
- Updated dependencies [a134a6f]
- Updated dependencies [9043639]
- Updated dependencies [8f3f948]
- Updated dependencies [5f80cea]
- Updated dependencies [532a7d4]
- Updated dependencies [42beaa4]
- Updated dependencies [3dee538]
- Updated dependencies [1c247cb]
- Updated dependencies [07491fd]
- Updated dependencies [d1fb472]
- Updated dependencies [870db1f]
- Updated dependencies [3ae6be1]
- Updated dependencies [4fd1fb3]
- Updated dependencies [68f5d3b]
  - @saas-ui/card@1.0.0
  - @saas-ui/auth@1.0.0
  - @saas-ui/banner@1.0.0
  - @saas-ui/button@1.0.0
  - @saas-ui/collapse@1.0.0
  - @saas-ui/data-table@1.0.0
  - @saas-ui/forms@1.0.0
  - @saas-ui/hooks@1.0.0
  - @saas-ui/hotkeys@1.0.0
  - @saas-ui/input-right-button@1.0.0
  - @saas-ui/layout@1.0.0
  - @saas-ui/list@1.0.0
  - @saas-ui/menu@1.0.0
  - @saas-ui/modals@1.0.0
  - @saas-ui/nprogress@1.0.0
  - @saas-ui/number-input@1.0.0
  - @saas-ui/palette@1.0.0
  - @saas-ui/password-input@1.0.0
  - @saas-ui/persona@1.0.0
  - @saas-ui/pin-input@1.0.0
  - @saas-ui/property@1.0.0
  - @saas-ui/provider@1.0.0
  - @saas-ui/radio@1.0.0
  - @saas-ui/search-input@1.0.0
  - @saas-ui/select@1.0.0
  - @saas-ui/snackbar@1.0.0
  - @saas-ui/stepper@1.0.0
  - @saas-ui/theme@1.0.0

## 1.0.0-rc.15

### Patch Changes

- Updated dependencies
  - @saas-ui/theme@1.0.0-rc.5
  - @saas-ui/provider@1.0.0-rc.8
  - @saas-ui/layout@1.0.0-rc.8
  - @saas-ui/menu@1.0.0-rc.8
  - @saas-ui/auth@1.0.0-rc.14
  - @saas-ui/data-table@1.0.0-rc.8
  - @saas-ui/modals@1.0.0-rc.13

## 1.0.0-rc.14

### Patch Changes

- Updated dependencies [a134a6f]
- Updated dependencies [a134a6f]
  - @saas-ui/hotkeys@1.0.0-rc.5
  - @saas-ui/collapse@1.0.0-rc.5
  - @saas-ui/stepper@1.0.0-rc.6
  - @saas-ui/forms@1.0.0-rc.12
  - @saas-ui/auth@1.0.0-rc.13
  - @saas-ui/modals@1.0.0-rc.12

## 1.0.0-rc.13

### Patch Changes

- 1744543: Updated dependencies.
- Updated dependencies [1744543]
- Updated dependencies [1744543]
  - @saas-ui/auth@1.0.0-rc.12
  - @saas-ui/banner@1.0.0-rc.5
  - @saas-ui/button@1.0.0-rc.5
  - @saas-ui/card@1.0.0-rc.5
  - @saas-ui/collapse@1.0.0-rc.4
  - @saas-ui/data-table@1.0.0-rc.7
  - @saas-ui/forms@1.0.0-rc.11
  - @saas-ui/hooks@1.0.0-rc.4
  - @saas-ui/hotkeys@1.0.0-rc.4
  - @saas-ui/input-right-button@1.0.0-rc.5
  - @saas-ui/layout@1.0.0-rc.7
  - @saas-ui/list@1.0.0-rc.5
  - @saas-ui/menu@1.0.0-rc.7
  - @saas-ui/modals@1.0.0-rc.11
  - @saas-ui/nprogress@1.0.0-rc.4
  - @saas-ui/number-input@1.0.0-rc.4
  - @saas-ui/palette@1.0.0-rc.4
  - @saas-ui/password-input@1.0.0-rc.5
  - @saas-ui/persona@1.0.0-rc.6
  - @saas-ui/pin-input@1.0.0-rc.5
  - @saas-ui/property@1.0.0-rc.6
  - @saas-ui/provider@1.0.0-rc.7
  - @saas-ui/radio@1.0.0-rc.4
  - @saas-ui/search-input@1.0.0-rc.4
  - @saas-ui/select@1.0.0-rc.4
  - @saas-ui/snackbar@1.0.0-rc.4
  - @saas-ui/stepper@1.0.0-rc.5
  - @saas-ui/theme@1.0.0-rc.4

## 1.0.0-rc.12

### Patch Changes

- Added missing dependency.
- Updated dependencies
  - @saas-ui/persona@1.0.0-rc.5

## 1.0.0-rc.11

### Patch Changes

- da3c4e4: Added ErrorBoundary component.
- bd3438d: FormStep now supports an onSubmit handler.
- 2ec8c91: Fixed vertical divider rendering incorrectly.
- Updated dependencies [bd3438d]
- Updated dependencies [ae47cbd]
  - @saas-ui/forms@1.0.0-rc.10
  - @saas-ui/property@1.0.0-rc.5
  - @saas-ui/provider@1.0.0-rc.6
  - @saas-ui/auth@1.0.0-rc.11
  - @saas-ui/modals@1.0.0-rc.10
  - @saas-ui/layout@1.0.0-rc.6
  - @saas-ui/menu@1.0.0-rc.6
  - @saas-ui/data-table@1.0.0-rc.6

## 1.0.0-rc.10

### Patch Changes

- 68c7b62: Card now has a isHoverable property to support hover styles.
- 43dff99: Option labels are now optional.
- d4afda3: ArrayFieldRowFields now accepts all FormLayout props (#48).
- 43dff99: Field is now correctly typed based on the field type.
- 38f7171: #50 - Fixed StepForm render prop types.
- 870db1f: New primary and secondary Button variant.
- Updated dependencies [68c7b62]
- Updated dependencies [43dff99]
- Updated dependencies [87d3fdc]
- Updated dependencies [d4afda3]
- Updated dependencies [43dff99]
- Updated dependencies [38f7171]
- Updated dependencies [870db1f]
  - @saas-ui/card@1.0.0-rc.4
  - @saas-ui/forms@1.0.0-rc.9
  - @saas-ui/provider@1.0.0-rc.5
  - @saas-ui/button@1.0.0-rc.4
  - @saas-ui/auth@1.0.0-rc.10
  - @saas-ui/modals@1.0.0-rc.9
  - @saas-ui/layout@1.0.0-rc.5
  - @saas-ui/menu@1.0.0-rc.5
  - @saas-ui/banner@1.0.0-rc.4
  - @saas-ui/input-right-button@1.0.0-rc.4
  - @saas-ui/list@1.0.0-rc.4
  - @saas-ui/data-table@1.0.0-rc.5
  - @saas-ui/password-input@1.0.0-rc.4
  - @saas-ui/property@1.0.0-rc.4

## 1.0.0-rc.9

### Patch Changes

- de0dce2: Scale reset button icon based on the input size.
- dc6376f: Updated all readme files, added better descriptions and links to docs and source code.
- 68f5d3b: Removed isPrimary and isSecondary Button properties, use variant="primary" instead.
- Updated dependencies [de0dce2]
- Updated dependencies [dc6376f]
- Updated dependencies [68f5d3b]
  - @saas-ui/search-input@1.0.0-rc.3
  - @saas-ui/auth@1.0.0-rc.9
  - @saas-ui/banner@1.0.0-rc.3
  - @saas-ui/button@1.0.0-rc.3
  - @saas-ui/card@1.0.0-rc.3
  - @saas-ui/collapse@1.0.0-rc.3
  - @saas-ui/data-table@1.0.0-rc.4
  - @saas-ui/forms@1.0.0-rc.8
  - @saas-ui/hooks@1.0.0-rc.3
  - @saas-ui/hotkeys@1.0.0-rc.3
  - @saas-ui/input-right-button@1.0.0-rc.3
  - @saas-ui/layout@1.0.0-rc.4
  - @saas-ui/list@1.0.0-rc.3
  - @saas-ui/menu@1.0.0-rc.4
  - @saas-ui/modals@1.0.0-rc.8
  - @saas-ui/nprogress@1.0.0-rc.3
  - @saas-ui/number-input@1.0.0-rc.3
  - @saas-ui/palette@1.0.0-rc.3
  - @saas-ui/password-input@1.0.0-rc.3
  - @saas-ui/persona@1.0.0-rc.4
  - @saas-ui/pin-input@1.0.0-rc.4
  - @saas-ui/property@1.0.0-rc.3
  - @saas-ui/provider@1.0.0-rc.4
  - @saas-ui/radio@1.0.0-rc.3
  - @saas-ui/select@1.0.0-rc.3
  - @saas-ui/snackbar@1.0.0-rc.3
  - @saas-ui/stepper@1.0.0-rc.4
  - @saas-ui/theme@1.0.0-rc.3

## 1.0.0-rc.8

### Patch Changes

- Fix vertical orientation for FormStepper.
- Updated dependencies
  - @saas-ui/forms@1.0.0-rc.7
  - @saas-ui/auth@1.0.0-rc.8
  - @saas-ui/modals@1.0.0-rc.7

## 1.0.0-rc.7

### Patch Changes

- Add exports entry for ajv
- Updated dependencies
  - @saas-ui/forms@1.0.0-rc.6
  - @saas-ui/auth@1.0.0-rc.7
  - @saas-ui/modals@1.0.0-rc.6

## 1.0.0-rc.6

### Patch Changes

- fca06e4: Added Json Schema (ajv) support for AutoForm.
- Updated dependencies [fca06e4]
  - @saas-ui/forms@1.0.0-rc.5
  - @saas-ui/auth@1.0.0-rc.6
  - @saas-ui/modals@1.0.0-rc.5

## 1.0.0-rc.5

### Patch Changes

- 9e9c601: Stepper now accepts an onChange handler.
- Updated dependencies [9e9c601]
  - @saas-ui/stepper@1.0.0-rc.3
  - @saas-ui/forms@1.0.0-rc.4
  - @saas-ui/auth@1.0.0-rc.5
  - @saas-ui/modals@1.0.0-rc.4

## 1.0.0-rc.4

### Minor Changes

- 532a7d4: Updated to Chakra UI 2.2.1
- 7a16ef7: Updated to Chakra UI 2.2.1

### Patch Changes

- c8621b8: NativeSelect now accepts chilren and doesn't throw if no options are passed.
- 6133901: No longer passing down label to input fields.
- ddec417: ArrayField no longer passing down items to the container element.
- 5f80cea: AutoForm now renders children.
- 532a7d4: Fixed all theme onconsistencies.
- 1c247cb: InputField now has type="text" by default.
- d1fb472: Select now renders a hidden input with the current value.
- Updated dependencies [c8621b8]
- Updated dependencies [532a7d4]
- Updated dependencies [6133901]
- Updated dependencies [ddec417]
- Updated dependencies [7a16ef7]
- Updated dependencies [5f80cea]
- Updated dependencies [532a7d4]
- Updated dependencies [1c247cb]
- Updated dependencies [d1fb472]
  - @saas-ui/select@1.0.0-rc.2
  - @saas-ui/auth@1.0.0-rc.4
  - @saas-ui/banner@1.0.0-rc.2
  - @saas-ui/button@1.0.0-rc.2
  - @saas-ui/card@1.0.0-rc.2
  - @saas-ui/collapse@1.0.0-rc.2
  - @saas-ui/data-table@1.0.0-rc.3
  - @saas-ui/forms@1.0.0-rc.3
  - @saas-ui/hooks@1.0.0-rc.2
  - @saas-ui/hotkeys@1.0.0-rc.2
  - @saas-ui/input-right-button@1.0.0-rc.2
  - @saas-ui/layout@1.0.0-rc.3
  - @saas-ui/list@1.0.0-rc.2
  - @saas-ui/menu@1.0.0-rc.3
  - @saas-ui/modals@1.0.0-rc.3
  - @saas-ui/nprogress@1.0.0-rc.2
  - @saas-ui/number-input@1.0.0-rc.2
  - @saas-ui/palette@1.0.0-rc.2
  - @saas-ui/password-input@1.0.0-rc.2
  - @saas-ui/persona@1.0.0-rc.3
  - @saas-ui/pin-input@1.0.0-rc.3
  - @saas-ui/property@1.0.0-rc.2
  - @saas-ui/provider@1.0.0-rc.3
  - @saas-ui/radio@1.0.0-rc.2
  - @saas-ui/search-input@1.0.0-rc.2
  - @saas-ui/snackbar@1.0.0-rc.2
  - @saas-ui/stepper@1.0.0-rc.2
  - @saas-ui/theme@1.0.0-rc.2

## 1.0.0-rc.3

### Patch Changes

- Re-publish.
- Updated dependencies
  - @saas-ui/auth@1.0.0-rc.3
  - @saas-ui/banner@1.0.0-rc.1
  - @saas-ui/button@1.0.0-rc.1
  - @saas-ui/card@1.0.0-rc.1
  - @saas-ui/collapse@1.0.0-rc.1
  - @saas-ui/data-table@1.0.0-rc.2
  - @saas-ui/forms@1.0.0-rc.2
  - @saas-ui/hooks@1.0.0-rc.1
  - @saas-ui/hotkeys@1.0.0-rc.1
  - @saas-ui/input-right-button@1.0.0-rc.1
  - @saas-ui/layout@1.0.0-rc.2
  - @saas-ui/list@1.0.0-rc.1
  - @saas-ui/menu@1.0.0-rc.2
  - @saas-ui/modals@1.0.0-rc.2
  - @saas-ui/nprogress@1.0.0-rc.1
  - @saas-ui/number-input@1.0.0-rc.1
  - @saas-ui/palette@1.0.0-rc.1
  - @saas-ui/password-input@1.0.0-rc.1
  - @saas-ui/persona@1.0.0-rc.2
  - @saas-ui/pin-input@1.0.0-rc.2
  - @saas-ui/property@1.0.0-rc.1
  - @saas-ui/provider@1.0.0-rc.2
  - @saas-ui/radio@1.0.0-rc.1
  - @saas-ui/search-input@1.0.0-rc.1
  - @saas-ui/select@1.0.0-rc.1
  - @saas-ui/snackbar@1.0.0-rc.1
  - @saas-ui/stepper@1.0.0-rc.1
  - @saas-ui/theme@1.0.0-rc.1

## 1.0.0-rc.2

### Patch Changes

- 4bb613c: Added new RouterProvider and useActivePath now uses Router context.
- 8f3f948: Removed redundant ThemeProvider / CSSReset and GlobalStyles components.
- 3dee538: Spacing between pin inputs can now be configured.
- 07491fd: ContextMenu now passing down all props to the internal Menu.
- Updated dependencies [4bb613c]
- Updated dependencies [4fc04d7]
- Updated dependencies [8f3f948]
- Updated dependencies [3dee538]
- Updated dependencies [07491fd]
  - @saas-ui/provider@1.0.0-rc.1
  - @saas-ui/persona@1.0.0-rc.1
  - @saas-ui/pin-input@1.0.0-rc.1
  - @saas-ui/menu@1.0.0-rc.1
  - @saas-ui/layout@1.0.0-rc.1
  - @saas-ui/forms@1.0.0-rc.1
  - @saas-ui/modals@1.0.0-rc.1
  - @saas-ui/auth@1.0.0-rc.2
  - @saas-ui/data-table@1.0.0-rc.1

## 1.0.0-rc.1

### Patch Changes

- Updated dependencies [9043639]
  - @saas-ui/auth@1.0.0-rc.1

## 1.0.0-rc.0

### Major Changes

- 1db5bf9: Initial release candidate

### Minor Changes

- 3ae6be1: breaking: Updated to Chakra UI 2.1
- 3ae6be1: breaking: React 18 support.

### Patch Changes

- 1fdf52a: Modern bundles now use .mjs extension.
- Updated dependencies [3ae6be1]
- Updated dependencies [a8fa78a]
- Updated dependencies [1db5bf9]
- Updated dependencies [1fdf52a]
- Updated dependencies [3ae6be1]
  - @saas-ui/auth@1.0.0-rc.0
  - @saas-ui/banner@1.0.0-rc.0
  - @saas-ui/button@1.0.0-rc.0
  - @saas-ui/card@1.0.0-rc.0
  - @saas-ui/collapse@1.0.0-rc.0
  - @saas-ui/data-table@1.0.0-rc.0
  - @saas-ui/forms@1.0.0-rc.0
  - @saas-ui/hooks@1.0.0-rc.0
  - @saas-ui/hotkeys@1.0.0-rc.0
  - @saas-ui/input-right-button@1.0.0-rc.0
  - @saas-ui/layout@1.0.0-rc.0
  - @saas-ui/list@1.0.0-rc.0
  - @saas-ui/menu@1.0.0-rc.0
  - @saas-ui/modals@1.0.0-rc.0
  - @saas-ui/nprogress@1.0.0-rc.0
  - @saas-ui/number-input@1.0.0-rc.0
  - @saas-ui/palette@1.0.0-rc.0
  - @saas-ui/password-input@1.0.0-rc.0
  - @saas-ui/persona@1.0.0-rc.0
  - @saas-ui/pin-input@1.0.0-rc.0
  - @saas-ui/property@1.0.0-rc.0
  - @saas-ui/provider@1.0.0-rc.0
  - @saas-ui/radio@1.0.0-rc.0
  - @saas-ui/search-input@1.0.0-rc.0
  - @saas-ui/select@1.0.0-rc.0
  - @saas-ui/snackbar@1.0.0-rc.0
  - @saas-ui/stepper@1.0.0-rc.0
  - @saas-ui/theme@1.0.0-rc.0

## 0.13.9

### Patch Changes

- 7e9e6dc: Fixed issue where the Snackbar spinner would always be white.
- Updated dependencies [7e9e6dc]
  - @saas-ui/snackbar@0.4.3
  - @saas-ui/theme@0.8.2
  - @saas-ui/provider@0.3.11
  - @saas-ui/layout@0.3.6
  - @saas-ui/menu@0.5.7
  - @saas-ui/auth@0.7.15
  - @saas-ui/data-table@0.3.6
  - @saas-ui/modals@0.5.15

## 0.13.8

### Patch Changes

- Updated Chakra UI version range not to include 2.x
- Updated dependencies
  - @saas-ui/auth@0.7.14
  - @saas-ui/banner@0.0.4
  - @saas-ui/button@0.4.2
  - @saas-ui/card@0.4.2
  - @saas-ui/collapse@0.3.1
  - @saas-ui/data-table@0.3.5
  - @saas-ui/forms@0.7.10
  - @saas-ui/hooks@0.4.1
  - @saas-ui/hotkeys@0.6.3
  - @saas-ui/input-right-button@0.3.3
  - @saas-ui/layout@0.3.5
  - @saas-ui/list@0.5.2
  - @saas-ui/menu@0.5.6
  - @saas-ui/modals@0.5.14
  - @saas-ui/nprogress@0.4.1
  - @saas-ui/number-input@0.3.1
  - @saas-ui/palette@0.5.1
  - @saas-ui/password-input@0.3.4
  - @saas-ui/persona@0.5.2
  - @saas-ui/pin-input@0.3.1
  - @saas-ui/property@0.3.3
  - @saas-ui/provider@0.3.10
  - @saas-ui/radio@0.3.1
  - @saas-ui/search-input@0.5.2
  - @saas-ui/select@0.4.1
  - @saas-ui/snackbar@0.4.2
  - @saas-ui/stepper@0.2.3
  - @saas-ui/theme@0.8.1

## 0.13.7

### Patch Changes

- 0930600: Snackbar promise error options are now passed down correctly.
- 0930600: Snackbar.promise now returns the promise and re-throws errors.
- Updated dependencies [0930600]
- Updated dependencies [0930600]
  - @saas-ui/snackbar@0.4.1

## 0.13.6

### Patch Changes

- 94c217d: Added appropriate autoComplete values to Auth forms.
- 0dbec1a: #36 Fixed issue where SubmitButton label would always render Submit
- Updated dependencies [94c217d]
- Updated dependencies [0dbec1a]
  - @saas-ui/auth@0.7.13
  - @saas-ui/button@0.4.1
  - @saas-ui/banner@0.0.3
  - @saas-ui/card@0.4.1
  - @saas-ui/forms@0.7.9
  - @saas-ui/input-right-button@0.3.2
  - @saas-ui/list@0.5.1
  - @saas-ui/menu@0.5.5
  - @saas-ui/modals@0.5.13
  - @saas-ui/password-input@0.3.3
  - @saas-ui/property@0.3.2

## 0.13.5

### Patch Changes

- f14fa4e: Fixed issue where the resolver was not passed down to the Form.
- Updated dependencies [f14fa4e]
  - @saas-ui/modals@0.5.12

## 0.13.4

### Patch Changes

- Updated dependencies [8f68188]
  - @saas-ui/search-input@0.5.1
  - @saas-ui/hotkeys@0.6.2

## 0.13.3

### Patch Changes

- Updated dependencies [391e21a]
  - @saas-ui/forms@0.7.8
  - @saas-ui/auth@0.7.12
  - @saas-ui/modals@0.5.11

## 0.13.2

### Patch Changes

- Updated dependencies [c0b3dc9]
  - @saas-ui/forms@0.7.7
  - @saas-ui/auth@0.7.11
  - @saas-ui/modals@0.5.10

## 0.13.1

### Patch Changes

- Updated dependencies
  - @saas-ui/forms@0.7.6
  - @saas-ui/auth@0.7.10
  - @saas-ui/modals@0.5.9

## 0.13.0

### Minor Changes

- 9abc079: Saas UI theme colors no longer generated on the fly.

### Patch Changes

- Updated dependencies [77b2860]
- Updated dependencies [22a30dc]
- Updated dependencies [77b2860]
- Updated dependencies [9abc079]
- Updated dependencies [a76c184]
  - @saas-ui/auth@0.7.9
  - @saas-ui/forms@0.7.5
  - @saas-ui/theme@0.8.0
  - @saas-ui/modals@0.5.8
  - @saas-ui/provider@0.3.9
  - @saas-ui/layout@0.3.4
  - @saas-ui/menu@0.5.4
  - @saas-ui/data-table@0.3.4

## 0.12.12

### Patch Changes

- Updated dependencies
  - @saas-ui/forms@0.7.4
  - @saas-ui/auth@0.7.8
  - @saas-ui/modals@0.5.7

## 0.12.11

### Patch Changes

- Updated dependencies
  - @saas-ui/forms@0.7.2
  - @saas-ui/auth@0.7.7
  - @saas-ui/modals@0.5.6

## 0.12.10

### Patch Changes

- Updated dependencies
  - @saas-ui/forms@0.7.2
  - @saas-ui/auth@0.7.6
  - @saas-ui/modals@0.5.5

## 0.12.9

### Patch Changes

- Added Zod field resolver for AutoForm
- Updated dependencies
  - @saas-ui/forms@0.7.1
  - @saas-ui/auth@0.7.5
  - @saas-ui/modals@0.5.4

## 0.12.8

### Patch Changes

- Updated dependencies [f6269cb]
- Updated dependencies [96336cd]
- Updated dependencies [bab579f]
  - @saas-ui/password-input@0.3.2
  - @saas-ui/hotkeys@0.6.1
  - @saas-ui/forms@0.7.0
  - @saas-ui/auth@0.7.4
  - @saas-ui/modals@0.5.3

## 0.12.7

### Patch Changes

- Updated dependencies [44c4dd3]
  - @saas-ui/hotkeys@0.6.0

## 0.12.6

### Patch Changes

- Updated dependencies [6696203]
  - @saas-ui/forms@0.6.2
  - @saas-ui/auth@0.7.3
  - @saas-ui/modals@0.5.2

## 0.12.5

### Patch Changes

- e7375a9: Moved @chakra-ui/system to dependencies
- Updated dependencies [42f4655]
  - @saas-ui/provider@0.3.8
  - @saas-ui/layout@0.3.3
  - @saas-ui/menu@0.5.3
  - @saas-ui/data-table@0.3.3

## 0.12.4

### Patch Changes

- Updated dependencies
  - @saas-ui/forms@0.6.1
  - @saas-ui/auth@0.7.2
  - @saas-ui/modals@0.5.1

## 0.12.3

### Patch Changes

- Updated dependencies [a396394]
- Updated dependencies [c1c556c]
  - @saas-ui/stepper@0.2.2
  - @saas-ui/theme@0.7.2
  - @saas-ui/persona@0.5.1
  - @saas-ui/provider@0.3.7
  - @saas-ui/layout@0.3.2
  - @saas-ui/menu@0.5.2
  - @saas-ui/data-table@0.3.2

## 0.12.2

### Patch Changes

- Updated dependencies [0024834]
- Updated dependencies [4939649]
- Updated dependencies [a36ac06]
- Updated dependencies [29a7479]
  - @saas-ui/theme@0.7.1
  - @saas-ui/auth@0.7.1
  - @saas-ui/stepper@0.2.1
  - @saas-ui/modals@0.5.0
  - @saas-ui/provider@0.3.6
  - @saas-ui/layout@0.3.1
  - @saas-ui/menu@0.5.1
  - @saas-ui/data-table@0.3.1

## 0.12.1

### Patch Changes

- Fixed issue where the ModalFooter would not render.
- Updated dependencies
  - @saas-ui/modals@0.4.1

## 0.12.0

### Minor Changes

- 0e81abd: BREAKING: Removed Yup dependency, you now need to configure default Form resolvers

  <Form> no longer accepts a Yup `schema` by default.

  Use a schema resolver to use schema support. All hookform resolvers are supported.

  ```ts
  import { yupResolver } from '@hookform/resolvers/yup'

  const form = <Form resolver={yupResolver(schema)} />
  ```

  AutoForm only supports Yup for now and has a new API.

  ```ts
  import { yupForm } from '@saas-ui/forms/yup'

  const form = <AutoForm {...yupForm(schema)} />
  ```

  Alternatively you can configure a default resolver for all forms.
  Add this somewhere in the root of your project.

  ```ts
  import { Form } from '@saas-ui/react'
  import { yupResolver, yupFieldResolver } from '@saas-ui/forms/yup' // yupResolver is exported from here as well for convenience.
  import { AnyObjectSchema } from 'yup'

  Form.getResolver = (schema: AnyObjectSchema) => yupResolver(schema) // @hookform/resolvers
  Form.getFieldResolver = (schema: AnyObjectSchema) => yupFieldResolver(schema) // AutoForm field resolver
  ```

- 9391c44: Fixed peer dependency issues.

### Patch Changes

- bf66fdf: Improved Auth forms types
- Updated dependencies [0e81abd]
- Updated dependencies [bf66fdf]
- Updated dependencies [9391c44]
  - @saas-ui/forms@0.6.0
  - @saas-ui/auth@0.7.0
  - @saas-ui/button@0.4.0
  - @saas-ui/card@0.4.0
  - @saas-ui/data-table@0.3.0
  - @saas-ui/hooks@0.4.0
  - @saas-ui/hotkeys@0.5.0
  - @saas-ui/layout@0.3.0
  - @saas-ui/list@0.5.0
  - @saas-ui/menu@0.5.0
  - @saas-ui/modals@0.4.0
  - @saas-ui/nprogress@0.4.0
  - @saas-ui/persona@0.5.0
  - @saas-ui/search-input@0.5.0
  - @saas-ui/select@0.4.0
  - @saas-ui/snackbar@0.4.0
  - @saas-ui/stepper@0.2.0
  - @saas-ui/theme@0.7.0
  - @saas-ui/banner@0.0.2
  - @saas-ui/input-right-button@0.3.1
  - @saas-ui/property@0.3.1
  - @saas-ui/provider@0.3.5
  - @saas-ui/password-input@0.3.1

## 0.11.8

### Patch Changes

- a268365: Fixed AuthToken type
- Updated dependencies [a268365]
  - @saas-ui/auth@0.6.6

## 0.11.7

### Patch Changes

- 99f3e33: Custom modal components can now be directly passed to modals.open
- Updated dependencies [99f3e33]
  - @saas-ui/modals@0.3.5

## 0.11.6

### Patch Changes

- 70340f0: useModal now has the correct types
- 9245460: Make sure Field ref is focusable
- 6c78c30: FormDialog type is now generic and accepts FieldValues / form context ref
- Updated dependencies [70340f0]
- Updated dependencies [9245460]
- Updated dependencies [6c78c30]
  - @saas-ui/modals@0.3.4
  - @saas-ui/forms@0.5.3
  - @saas-ui/auth@0.6.5

## 0.11.5

### Patch Changes

- Updated dependencies
  - @saas-ui/stepper@0.1.2

## 0.11.4

### Patch Changes

- 8b731d8: usePromise errors are now re-thrown
- Updated dependencies [8b731d8]
  - @saas-ui/hooks@0.3.1
  - @saas-ui/auth@0.6.4

## 0.11.3

### Patch Changes

- Updated dependencies [0f67f76]
  - @saas-ui/forms@0.5.2
  - @saas-ui/auth@0.6.3
  - @saas-ui/modals@0.3.3

## 0.11.2

### Patch Changes

- 2fd9917: Fixed a type issue
- 4606dd5: useLink now uses correct type and improved performance.
- df5cd27: Pass down the inferred type to useTable
- a26aa7c: ArrayField context can now be accessed using ref.
- Updated dependencies [c610881]
- Updated dependencies [2fd9917]
- Updated dependencies [4606dd5]
- Updated dependencies [df5cd27]
- Updated dependencies [a26aa7c]
  - @saas-ui/forms@0.5.1
  - @saas-ui/modals@0.3.2
  - @saas-ui/provider@0.3.4
  - @saas-ui/data-table@0.2.4
  - @saas-ui/auth@0.6.2
  - @saas-ui/layout@0.2.4
  - @saas-ui/menu@0.4.4

## 0.11.1

### Patch Changes

- 6513d26: No longer rendering StepperCompleted in StepperContent
- Updated dependencies [6513d26]
  - @saas-ui/stepper@0.1.1

## 0.11.0

### Minor Changes

- 9d11ba5: Added StepForm and Stepper components

### Patch Changes

- Updated dependencies [9d11ba5]
  - @saas-ui/forms@0.5.0
  - @saas-ui/stepper@0.1.0
  - @saas-ui/theme@0.6.0
  - @saas-ui/auth@0.6.1
  - @saas-ui/modals@0.3.1
  - @saas-ui/provider@0.3.3
  - @saas-ui/layout@0.2.3
  - @saas-ui/menu@0.4.3
  - @saas-ui/data-table@0.2.3

## 0.10.3

### Patch Changes

- 87b29a8: Renamed Loading to Loader. Loading will be removed in 1.0
- Updated dependencies [87b29a8]
  - @saas-ui/layout@0.2.2
  - @saas-ui/theme@0.5.2
  - @saas-ui/data-table@0.2.2
  - @saas-ui/provider@0.3.2
  - @saas-ui/menu@0.4.2

## 0.10.2

### Patch Changes

- Updated dependencies [4aef278]
  - @saas-ui/palette@0.5.0
  - @saas-ui/theme@0.5.1
  - @saas-ui/provider@0.3.1
  - @saas-ui/layout@0.2.1
  - @saas-ui/menu@0.4.1
  - @saas-ui/data-table@0.2.1

## 0.10.1

### Patch Changes

- ce66628: Added Banner component
- Updated dependencies [ce66628]
  - @saas-ui/banner@0.0.1

## 0.10.0

### Minor Changes

- e511ffd: Added a11y testing to all packages

### Patch Changes

- d66f8ce: Added ContextMenu component
- Updated dependencies [e511ffd]
- Updated dependencies [d66f8ce]
  - @saas-ui/auth@0.6.0
  - @saas-ui/button@0.3.0
  - @saas-ui/card@0.3.0
  - @saas-ui/data-table@0.2.0
  - @saas-ui/layout@0.2.0
  - @saas-ui/list@0.4.0
  - @saas-ui/menu@0.4.0
  - @saas-ui/modals@0.3.0
  - @saas-ui/nprogress@0.3.0
  - @saas-ui/number-input@0.3.0
  - @saas-ui/pin-input@0.3.0
  - @saas-ui/property@0.3.0
  - @saas-ui/radio@0.3.0
  - @saas-ui/search-input@0.4.0
  - @saas-ui/select@0.3.0
  - @saas-ui/collapse@0.3.0
  - @saas-ui/forms@0.4.0
  - @saas-ui/hooks@0.3.0
  - @saas-ui/hotkeys@0.4.0
  - @saas-ui/input-right-button@0.3.0
  - @saas-ui/password-input@0.3.0
  - @saas-ui/persona@0.4.0
  - @saas-ui/provider@0.3.0
  - @saas-ui/snackbar@0.3.0
  - @saas-ui/system@0.4.0
  - @saas-ui/theme@0.5.0

## 0.9.3

### Patch Changes

- Updated dependencies [09ef6fb]
  - @saas-ui/auth@0.5.2

## 0.9.2

### Patch Changes

- 09d4167: Added PropertyList component and improved a11y
- 16c82e6: Dont override autoComplete when in password mode
- Updated dependencies [09d4167]
- Updated dependencies [16c82e6]
  - @saas-ui/list@0.3.5
  - @saas-ui/property@0.2.2
  - @saas-ui/theme@0.4.11
  - @saas-ui/password-input@0.2.2
  - @saas-ui/provider@0.2.14
  - @saas-ui/forms@0.3.4
  - @saas-ui/layout@0.1.13
  - @saas-ui/menu@0.3.10
  - @saas-ui/auth@0.5.1
  - @saas-ui/modals@0.2.10
  - @saas-ui/data-table@0.1.12

## 0.9.1

### Patch Changes

- Updated dependencies
  - @saas-ui/list@0.3.4
  - @saas-ui/theme@0.4.10
  - @saas-ui/provider@0.2.13
  - @saas-ui/layout@0.1.12
  - @saas-ui/menu@0.3.9
  - @saas-ui/data-table@0.1.11

## 0.9.0

### Minor Changes

- a467d50: Added Forgot- and UpdatePassword views and i11y improvements.

### Patch Changes

- 1ce9ba9: Improved ObjectField semantics and styles
- Updated dependencies [a6842fd]
- Updated dependencies [d3da8ef]
- Updated dependencies [a467d50]
- Updated dependencies [1190a53]
- Updated dependencies [52688c1]
- Updated dependencies [1ce9ba9]
  - @saas-ui/forms@0.3.3
  - @saas-ui/auth@0.5.0
  - @saas-ui/snackbar@0.2.2
  - @saas-ui/list@0.3.3
  - @saas-ui/theme@0.4.9
  - @saas-ui/modals@0.2.9
  - @saas-ui/provider@0.2.12
  - @saas-ui/layout@0.1.11
  - @saas-ui/menu@0.3.8
  - @saas-ui/data-table@0.1.10

## 0.8.8

### Patch Changes

- Updated dependencies [7e316aa]
- Updated dependencies [be249e2]
  - @saas-ui/layout@0.1.10
  - @saas-ui/theme@0.4.8
  - @saas-ui/data-table@0.1.9
  - @saas-ui/provider@0.2.11
  - @saas-ui/menu@0.3.7

## 0.8.7

### Patch Changes

- Updated dependencies [4eba003]
  - @saas-ui/theme@0.4.7
  - @saas-ui/provider@0.2.10
  - @saas-ui/layout@0.1.9
  - @saas-ui/menu@0.3.6
  - @saas-ui/data-table@0.1.8

## 0.8.6

### Patch Changes

- Updated dependencies
  - @saas-ui/card@0.2.3
  - @saas-ui/theme@0.4.6
  - @saas-ui/provider@0.2.9
  - @saas-ui/layout@0.1.8
  - @saas-ui/menu@0.3.5
  - @saas-ui/data-table@0.1.7

## 0.8.5

### Patch Changes

- Updated dependencies
  - @saas-ui/theme@0.4.5
  - @saas-ui/provider@0.2.8
  - @saas-ui/layout@0.1.7
  - @saas-ui/menu@0.3.4
  - @saas-ui/data-table@0.1.6

## 0.8.4

### Patch Changes

- Updated dependencies [bae6cf9]
- Updated dependencies [afc15d8]
  - @saas-ui/modals@0.2.8
  - @saas-ui/card@0.2.2
  - @saas-ui/theme@0.4.4
  - @saas-ui/provider@0.2.7
  - @saas-ui/layout@0.1.6
  - @saas-ui/menu@0.3.3
  - @saas-ui/data-table@0.1.5

## 0.8.3

### Patch Changes

- Updated dependencies [676eefa]
  - @saas-ui/menu@0.3.2
  - @saas-ui/select@0.2.2
  - @saas-ui/forms@0.3.2
  - @saas-ui/auth@0.4.7
  - @saas-ui/modals@0.2.7

## 0.8.2

### Patch Changes

- Updated dependencies [e691413]
  - @saas-ui/forms@0.3.1
  - @saas-ui/auth@0.4.6
  - @saas-ui/modals@0.2.6

## 0.8.1

### Patch Changes

- Updated dependencies [7b87e43]
  - @saas-ui/menu@0.3.1

## 0.8.0

### Minor Changes

- 385b760: Improved Typescript support for forms, conditionally render form fields with DisplayIf
- f88d99a: Added new OverflowMenu component

### Patch Changes

- Updated dependencies [c7c77c5]
- Updated dependencies [5fbdefc]
- Updated dependencies [385b760]
- Updated dependencies [f88d99a]
  - @saas-ui/menu@0.3.0
  - @saas-ui/layout@0.1.5
  - @saas-ui/forms@0.3.0
  - @saas-ui/data-table@0.1.4
  - @saas-ui/auth@0.4.5
  - @saas-ui/modals@0.2.5

## 0.7.5

### Patch Changes

- AuthProvider now checks if a user is authenticated when logIn or signUp are succesful.
- Updated dependencies
  - @saas-ui/auth@0.4.4

## 0.7.4

### Patch Changes

- Updated dependencies [cedd489]
- Updated dependencies [b57b40b]
  - @saas-ui/collapse@0.2.3
  - @saas-ui/layout@0.1.4
  - @saas-ui/data-table@0.1.3

## 0.7.3

### Patch Changes

- Updated dependencies [a7fc88b]
- Updated dependencies [0456a9f]
  - @saas-ui/data-table@0.1.2
  - @saas-ui/modals@0.2.4

## 0.7.2

### Patch Changes

- 65cd402: Added new FormDialog component
- 4b8a1cb: Improved useCollapse Typescript signature, merge toggle classname and return isCollapsible param.
- 46dd92b: NumberInput stepper can now be hidden and supports custom icons.
- Updated dependencies [65cd402]
- Updated dependencies [4b8a1cb]
- Updated dependencies [44e024f]
- Updated dependencies [46dd92b]
  - @saas-ui/modals@0.2.3
  - @saas-ui/collapse@0.2.2
  - @saas-ui/layout@0.1.3
  - @saas-ui/number-input@0.2.2
  - @saas-ui/data-table@0.1.1
  - @saas-ui/forms@0.2.5
  - @saas-ui/auth@0.4.3

## 0.7.1

### Patch Changes

- Add Magic.link auth service to exports
- Updated dependencies
  - @saas-ui/auth@0.4.2

## 0.7.0

### Minor Changes

- 94a4bd6: Added new DataTable component

### Patch Changes

- b3159a7: Only publish dist and src files
- 2df4438: Add Link component
- Updated dependencies [94a4bd6]
- Updated dependencies [b3159a7]
- Updated dependencies [5e49802]
- Updated dependencies [2df4438]
  - @saas-ui/data-table@0.1.0
  - @saas-ui/auth@0.4.1
  - @saas-ui/button@0.2.1
  - @saas-ui/card@0.2.1
  - @saas-ui/collapse@0.2.1
  - @saas-ui/forms@0.2.4
  - @saas-ui/hooks@0.2.1
  - @saas-ui/hotkeys@0.3.1
  - @saas-ui/input-right-button@0.2.1
  - @saas-ui/layout@0.1.2
  - @saas-ui/list@0.3.2
  - @saas-ui/menu@0.2.6
  - @saas-ui/modals@0.2.2
  - @saas-ui/nprogress@0.2.1
  - @saas-ui/number-input@0.2.1
  - @saas-ui/palette@0.4.1
  - @saas-ui/password-input@0.2.1
  - @saas-ui/persona@0.3.2
  - @saas-ui/pin-input@0.2.1
  - @saas-ui/property@0.2.1
  - @saas-ui/provider@0.2.6
  - @saas-ui/radio@0.2.1
  - @saas-ui/search-input@0.3.1
  - @saas-ui/select@0.2.1
  - @saas-ui/snackbar@0.2.1
  - @saas-ui/system@0.3.1
  - @saas-ui/theme@0.4.3

## 0.6.0

### Minor Changes

- 07d67a6: Finalized the authentication api

### Patch Changes

- Updated dependencies [07d67a6]
  - @saas-ui/auth@0.4.0

## 0.5.3

### Patch Changes

- Update dependencies
- Updated dependencies [d3edc56]
- Updated dependencies [60173ca]
  - @saas-ui/theme@0.4.2
  - @saas-ui/auth@0.3.0
  - @saas-ui/provider@0.2.5
  - @saas-ui/menu@0.2.5

## 0.5.2

### Patch Changes

- Add supabase service to package entries
- Bump version
- Updated dependencies
- Updated dependencies
  - @saas-ui/auth@0.2.3
  - @saas-ui/layout@0.1.1
  - @saas-ui/forms@0.2.3
  - @saas-ui/list@0.3.1
  - @saas-ui/menu@0.2.4
  - @saas-ui/modals@0.2.1
  - @saas-ui/provider@0.2.4
  - @saas-ui/theme@0.4.1

## 0.5.1

### Patch Changes

- Set default value on FormProps generic type
- Updated dependencies
  - @saas-ui/forms@0.2.2
  - @saas-ui/auth@0.2.2

## 0.5.0

### Minor Changes

- 638a054: Added new layout package with EmptyState and Loading components
- 4733b8f: Added new MenuDialog component

### Patch Changes

- Updated dependencies [638a054]
- Updated dependencies [76f5e46]
- Updated dependencies [4733b8f]
  - @saas-ui/theme@0.4.0
  - @saas-ui/layout@0.1.0
  - @saas-ui/menu@0.2.3
  - @saas-ui/modals@0.2.0
  - @saas-ui/provider@0.2.3

## 0.4.1

### Patch Changes

- Fix modals build script
- Updated dependencies
  - @saas-ui/modals@0.1.1

## 0.4.0

### Minor Changes

- Release list component

### Patch Changes

- Updated dependencies
  - @saas-ui/list@0.3.0
  - @saas-ui/theme@0.3.0
  - @saas-ui/provider@0.2.2
  - @saas-ui/menu@0.2.2

## 0.3.0

### Minor Changes

- Initial release of modals manager

### Patch Changes

- Updated dependencies
  - @saas-ui/modals@0.1.0

## 0.2.1

### Patch Changes

- 7141944: Improve button color accesibility
- e448f31: Saas UI theme now longer shows outlines when buttons/links are focused with a mouse click
- 6c55bef: Now using semantic tokens for presence colors
- 9673005: Improved typescript support and fixed issue with invalid states
- Updated dependencies [7141944]
- Updated dependencies [e448f31]
- Updated dependencies [6c55bef]
- Updated dependencies [9673005]
  - @saas-ui/theme@0.2.1
  - @saas-ui/persona@0.3.1
  - @saas-ui/forms@0.2.1
  - @saas-ui/provider@0.2.1
  - @saas-ui/auth@0.2.1
  - @saas-ui/menu@0.2.1

## 0.2.0

### Minor Changes

- Upgrade to Chakra UI 1.8.1

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @saas-ui/provider@0.2.0
  - @saas-ui/auth@0.2.0
  - @saas-ui/collapse@0.2.0
  - @saas-ui/forms@0.2.0
  - @saas-ui/hotkeys@0.3.0
  - @saas-ui/input-right-button@0.2.0
  - @saas-ui/menu@0.2.0
  - @saas-ui/nprogress@0.2.0
  - @saas-ui/number-input@0.2.0
  - @saas-ui/palette@0.4.0
  - @saas-ui/persona@0.3.0
  - @saas-ui/pin-input@0.2.0
  - @saas-ui/radio@0.2.0
  - @saas-ui/search-input@0.3.0
  - @saas-ui/select@0.2.0
  - @saas-ui/snackbar@0.2.0
  - @saas-ui/theme@0.2.0
  - @saas-ui/button@0.2.0
  - @saas-ui/card@0.2.0
  - @saas-ui/hooks@0.2.0
  - @saas-ui/password-input@0.2.0
  - @saas-ui/property@0.2.0
  - @saas-ui/system@0.3.0

## 0.1.16

### Patch Changes

- Remove Next dependency
- Updated dependencies
  - @saas-ui/nprogress@0.1.6

## 0.1.15

### Patch Changes

- Removed unused isOptional option
- Updated dependencies
  - @saas-ui/auth@0.1.9
  - @saas-ui/forms@0.1.9

## 0.1.14

### Patch Changes

- Update radio dependencies
- Updated dependencies
  - @saas-ui/forms@0.1.8
  - @saas-ui/radio@0.1.5
  - @saas-ui/auth@0.1.8

## 0.1.13

### Patch Changes

- Updated dependencies
  - @saas-ui/forms@0.1.7
  - @saas-ui/number-input@0.1.4
  - @saas-ui/password-input@0.1.7
  - @saas-ui/persona@0.2.6
  - @saas-ui/pin-input@0.1.4
  - @saas-ui/radio@0.1.4
  - @saas-ui/search-input@0.2.4
  - @saas-ui/select@0.1.5
  - @saas-ui/auth@0.1.7
  - @saas-ui/hotkeys@0.2.6

## 0.1.12

### Patch Changes

- Update card dependencies
- Updated dependencies
  - @saas-ui/card@0.1.6
  - @saas-ui/hotkeys@0.2.5
  - @saas-ui/system@0.2.5
  - @saas-ui/theme@0.1.6
  - @saas-ui/auth@0.1.6
  - @saas-ui/button@0.1.6
  - @saas-ui/menu@0.1.6
  - @saas-ui/nprogress@0.1.5
  - @saas-ui/persona@0.2.5
  - @saas-ui/snackbar@0.1.5
  - @saas-ui/provider@0.1.6
  - @saas-ui/forms@0.1.6
  - @saas-ui/input-right-button@0.1.6
  - @saas-ui/password-input@0.1.6

## 0.1.11

### Patch Changes

- Update correct dependencies
- Updated dependencies
  - @saas-ui/provider@0.1.5
  - @saas-ui/theme@0.1.5

## 0.1.9

### Patch Changes

- Add React to collapse dependencies
- Updated dependencies
  - @saas-ui/collapse@0.1.5

## 0.1.8

### Patch Changes

- Add select & search-input

## 0.1.6

### Patch Changes

- Version bump

## 0.1.5

### Patch Changes

- Updated dependencies
  - @saas-ui/hotkeys@0.2.4
  - @saas-ui/system@0.2.4
  - @saas-ui/forms@0.1.5
  - @saas-ui/property@0.1.3
  - @saas-ui/auth@0.1.5
  - @saas-ui/button@0.1.5
  - @saas-ui/card@0.1.5
  - @saas-ui/menu@0.1.5
  - @saas-ui/nprogress@0.1.4
  - @saas-ui/persona@0.2.4
  - @saas-ui/snackbar@0.1.4
  - @saas-ui/theme@0.1.4
  - @saas-ui/input-right-button@0.1.5
  - @saas-ui/provider@0.1.4
  - @saas-ui/password-input@0.1.5

## 0.1.4

### Patch Changes

- Updated dependencies
  - @saas-ui/auth@0.1.4
  - @saas-ui/button@0.1.4
  - @saas-ui/card@0.1.4
  - @saas-ui/collapse@0.1.4
  - @saas-ui/forms@0.1.4
  - @saas-ui/input-right-button@0.1.4
  - @saas-ui/menu@0.1.4
  - @saas-ui/password-input@0.1.4

## 0.1.3

### Patch Changes

- Improved exports configuration
- Updated dependencies
  - @saas-ui/auth@0.1.3
  - @saas-ui/button@0.1.3
  - @saas-ui/card@0.1.3
  - @saas-ui/collapse@0.1.3
  - @saas-ui/forms@0.1.3
  - @saas-ui/hooks@0.1.3
  - @saas-ui/hotkeys@0.2.3
  - @saas-ui/input-right-button@0.1.3
  - @saas-ui/menu@0.1.3
  - @saas-ui/nprogress@0.1.3
  - @saas-ui/number-input@0.1.3
  - @saas-ui/palette@0.3.2
  - @saas-ui/password-input@0.1.3
  - @saas-ui/persona@0.2.3
  - @saas-ui/pin-input@0.1.3
  - @saas-ui/property@0.1.3
  - @saas-ui/provider@0.1.3
  - @saas-ui/radio@0.1.3
  - @saas-ui/snackbar@0.1.3
  - @saas-ui/system@0.2.3
  - @saas-ui/theme@0.1.3

## 0.1.2

### Patch Changes

- Republish with correct deps
- Updated dependencies
  - @saas-ui/auth@0.1.2
  - @saas-ui/button@0.1.2
  - @saas-ui/card@0.1.2
  - @saas-ui/collapse@0.1.2
  - @saas-ui/forms@0.1.2
  - @saas-ui/hooks@0.1.2
  - @saas-ui/hotkeys@0.2.2
  - @saas-ui/input-right-button@0.1.2
  - @saas-ui/menu@0.1.2
  - @saas-ui/nprogress@0.1.2
  - @saas-ui/number-input@0.1.2
  - @saas-ui/palette@0.3.1
  - @saas-ui/password-input@0.1.2
  - @saas-ui/persona@0.2.2
  - @saas-ui/pin-input@0.1.2
  - @saas-ui/property@0.1.2
  - @saas-ui/provider@0.1.2
  - @saas-ui/radio@0.1.2
  - @saas-ui/snackbar@0.1.2
  - @saas-ui/system@0.2.2
  - @saas-ui/theme@0.1.2

## 0.1.1

### Patch Changes

- Fix version mismatch
- Updated dependencies
  - @saas-ui/provider@0.1.1
  - @saas-ui/snackbar@0.1.1
  - @saas-ui/auth@0.1.1
  - @saas-ui/button@0.1.1
  - @saas-ui/card@0.1.1
  - @saas-ui/collapse@0.1.1
  - @saas-ui/forms@0.1.1
  - @saas-ui/hooks@0.1.1
  - @saas-ui/hotkeys@0.2.1
  - @saas-ui/input-right-button@0.1.1
  - @saas-ui/menu@0.1.1
  - @saas-ui/nprogress@0.1.1
  - @saas-ui/number-input@0.1.1
  - @saas-ui/password-input@0.1.1
  - @saas-ui/persona@0.2.1
  - @saas-ui/pin-input@0.1.1
  - @saas-ui/property@0.1.1
  - @saas-ui/radio@0.1.1
  - @saas-ui/system@0.2.1
  - @saas-ui/theme@0.1.1

## 0.1.0

### Minor Changes

- Initial release of Saas UI Core

### Patch Changes

- Updated dependencies
  - @saas-ui/auth@0.1.0
  - @saas-ui/button@0.1.0
  - @saas-ui/card@0.1.0
  - @saas-ui/collapse@0.1.0
  - @saas-ui/forms@0.1.0
  - @saas-ui/hooks@0.1.0
  - @saas-ui/hotkeys@0.2.0
  - @saas-ui/input-right-button@0.1.0
  - @saas-ui/menu@0.1.0
  - @saas-ui/nprogress@0.1.0
  - @saas-ui/number-input@0.1.0
  - @saas-ui/password-input@0.1.0
  - @saas-ui/persona@0.2.0
  - @saas-ui/pin-input@0.1.0
  - @saas-ui/property@0.1.0
  - @saas-ui/provider@0.1.0
  - @saas-ui/radio@0.1.0
  - @saas-ui/snackbar@0.1.0
  - @saas-ui/system@0.2.0
  - @saas-ui/theme@0.1.0
