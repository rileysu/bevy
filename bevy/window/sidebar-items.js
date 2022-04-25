initSidebarItems({"enum":[["CursorIcon","The icon to display for a window’s cursor"],["FileDragAndDrop","Events related to files being dragged and dropped on a window."],["PresentMode","Presentation mode for a window."],["WindowCommand",""],["WindowMode","Defines the way a window is displayed"]],"fn":[["exit_on_window_close_system",""]],"mod":[["prelude",""]],"struct":[["CloseWindow","An event that indicates a window should be closed."],["CreateWindow","An event that indicates that a new window should be created."],["CursorEntered",""],["CursorLeft",""],["CursorMoved",""],["HasRawWindowHandleWrapper",""],["ModifiesWindows",""],["RawWindowHandleWrapper","This wrapper exist to enable safely passing a [`RawWindowHandle`] across threads. Extracting the handle is still an unsafe operation, so the caller must still validate that using the raw handle is safe for a given context."],["ReceivedCharacter","An event that is sent whenever a window receives a character from the OS or underlying system."],["RequestRedraw","An event that indicates the window should redraw, even if its control flow is set to `Wait` and there have been no window events."],["Window","An operating system window that can present content and receive user input."],["WindowBackendScaleFactorChanged","An event that indicates a window’s OS-reported scale factor has changed."],["WindowCloseRequested","An event that is sent whenever a close was requested for a window. For example: when the “close” button is pressed on a window."],["WindowCreated","An event that is sent whenever a new window is created."],["WindowDescriptor",""],["WindowFocused","An event that indicates a window has received or lost focus."],["WindowId",""],["WindowMoved","An event that is sent when a window is repositioned in physical pixels."],["WindowPlugin",""],["WindowResizeConstraints","The size limits on a window. These values are measured in logical pixels, so the user’s scale factor does affect the size limits on the window. Please note that if the window is resizable, then when the window is maximized it may have a size outside of these limits. The functionality required to disable maximizing is not yet exposed by winit."],["WindowResized","A window event that is sent whenever a windows logical size has changed"],["WindowScaleFactorChanged","An event that indicates a window’s scale factor has changed."],["Windows","A collection of [`Window`]s with unique [`WindowId`]s."]]});