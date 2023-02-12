import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

import { AccessTime, AccountBalance, AccountCircle, Add, AddCircle, AddCircleOutline, AddPhotoAlternate, AddHome, AddLink, AlignVerticalBottom, Apps, ArrowBackIosNew, ArrowCircleDown, ArrowCircleUp, ArrowBack, ArrowForward, ArrowForwardIos, ArrowUpward, ArrowDownward, Article, AspectRatio, Assessment, Assignment, AssignmentInd, AssignmentLate, AssignmentTurnedIn, AssuredWorkload, AttachEmail, Attribution, Attachment, AttachFile, AutoDelete, AutoStories, Autorenew, Backup, Badge, BackupTable, Balcony, Ballot, BarChart, Beenhere, Blinds, BlindsClosed, Block, Bolt, BookmarkAdd, BookmarkAdded, BookmarkRemove, BookmarkBorder, Bookmark, Bookmarks, BorderAll, BorderColor, Boy, BrowserUpdated, Brush, BuildCircle, Build, BurstMode, Cached, CalendarMonth, CalendarToday, CalendarViewDay, CalendarViewMonth, CalendarViewWeek, Cancel, CancelPresentation, CenterFocusStrong, CenterFocusWeak, Chair, ChangeCircle, Chat, ChatBubble, ChatBubbleOutline, Check, CheckBox, CheckBoxOutlineBlank, CheckCircle, CheckCircleOutline, ChevronLeft, ChevronRight, ChromeReaderMode, CleaningServices, Clear, Close, ClearAll, CloudDone, CloudDownload, CloudUpload, Collections, CollectionsBookmark, ColorLens, Colorize, Comment, CommentBank, CommentsDisabled, Commit, CompareArrows, Compress, Computer, CompassCalibration, ContactEmergency, ContactMail, ContactPage, ContactSupport, Contacts, ContentCopy, ContentPaste, ContentPasteGo, ContentPasteOff, ContentPasteSearch, ControlPoint, Cookie, CopyAll, CorporateFare, Create, CreateNewFolder, CropFree, CropOriginal, Dashboard, DashboardCustomize, DataSaverOff, DataSaverOn, Dataset, DatasetLinked, DateRange, Delete, DeleteForever, DeleteOutline, CircleNotifications, DeleteSweep, Description, DoNotDisturbOn } from "@mui/icons-material"

export type IconComponentType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string
}

export type IconType = {
    name: string
    component: IconComponentType
}

export const arrowIcons: IconType[] = [
    {
        name: "ArrowBackIosNew",
        component: ArrowBackIosNew
    }, {
        name: "ArrowForwardIos",
        component: ArrowForwardIos
    }, {
        name: "ChevronLeft",
        component: ChevronLeft
    }, {
        name: "ChevronRight",
        component: ChevronRight
    }, {
        name: "ArrowCircleDown",
        component: ArrowCircleDown
    }, {
        name: "ArrowCircleUp",
        component: ArrowCircleUp
    }, {
        name: "ArrowBack",
        component: ArrowBack
    }, {
        name: "ArrowForward",
        component: ArrowForward
    }, {
        name: "ArrowUpward",
        component: ArrowUpward
    }, {
        name: "ArrowDownward",
        component: ArrowDownward
    }, {
        name: "CompareArrows",
        component: CompareArrows
    },
]

export const userIcons: IconType[] = [
    {
        name: "AccountCircle",
        component: AccountCircle
    }, {
        name: "AssignmentInd",
        component: AssignmentInd
    }, {
        name: "ContactEmergency",
        component: ContactEmergency
    }, {
        name: "ContactMail",
        component: ContactMail
    }, {
        name: "ContactPage",
        component: ContactPage
    }, {
        name: "Badge",
        component: Badge
    }, {
        name: "Attribution",
        component: Attribution
    }, {
        name: "Boy",
        component: Boy
    }, {
        name: "Contacts",
        component: Contacts
    },
]

export const successIcons: IconType[] = [
    {
        name: "Check",
        component: Check
    }, {
        name: "CheckBox",
        component: CheckBox
    }, {
        name: "CheckBoxOutlineBlank",
        component: CheckBoxOutlineBlank
    }, {
        name: "CheckCircle",
        component: CheckCircle
    }, {
        name: "CheckCircleOutline",
        component: CheckCircleOutline
    }, {
        name: "Beenhere",
        component: Beenhere
    }, {
        name: "AssignmentTurnedIn",
        component: AssignmentTurnedIn
    },
]

export const warningIcons: IconType[] = [
    {
        name: "AssignmentLate",
        component: AssignmentLate
    },
]

export const contentIcons: IconType[] = [
    {
        name: "ContentPaste",
        component: ContentPaste
    }, {
        name: "ContentPasteGo",
        component: ContentPasteGo
    }, {
        name: "ContentPasteOff",
        component: ContentPasteOff
    }, {
        name: "ContentPasteSearch",
        component: ContentPasteSearch
    }, {
        name: "ContentCopy",
        component: ContentCopy
    }, {
        name: "Assignment",
        component: Assignment
    }, {
        name: "Article",
        component: Article
    }, {
        name: "Description",
        component: Description
    }
]

export const cloudIcons: IconType[] = [
    {
        name: "Backup",
        component: Backup
    }, {
        name: "CloudDone",
        component: CloudDone
    }, {
        name: "CloudDownload",
        component: CloudDownload
    }, {
        name: "CloudUpload",
        component: CloudUpload
    }, {
        name: "BrowserUpdated",
        component: BrowserUpdated
    },
]

export const calendarIcons: IconType[] = [
    {
        name: "DateRange",
        component: DateRange
    }, {
        name: "CalendarMonth",
        component: CalendarMonth
    }, {
        name: "CalendarToday",
        component: CalendarToday
    }, {
        name: "CalendarViewDay",
        component: CalendarViewDay
    }, {
        name: "CalendarViewMonth",
        component: CalendarViewMonth
    }, {
        name: "CalendarViewWeek",
        component: CalendarViewWeek
    },
]

export const bookIcons: IconType[] = [
    {
        name: "AutoStories",
        component: AutoStories
    }, {
        name: "ChromeReaderMode",
        component: ChromeReaderMode
    }, {
        name: "Bookmark",
        component: Bookmark
    }, {
        name: "BookmarkAdd",
        component: BookmarkAdd
    }, {
        name: "BookmarkAdded",
        component: BookmarkAdded
    }, {
        name: "BookmarkRemove",
        component: BookmarkRemove
    }, {
        name: "Bookmarks",
        component: Bookmarks
    }, {
        name: "BookmarkBorder",
        component: BookmarkBorder
    }, {
        name: "CollectionsBookmark",
        component: CollectionsBookmark
    },
]

export const CRUDIcons: IconType[] = [
    {
        name: "Add",
        component: Add
    }, {
        name: "AddCircle",
        component: AddCircle
    }, {
        name: "ControlPoint",
        component: ControlPoint
    }, {
        name: "AddCircleOutline",
        component: AddCircleOutline
    }, {
        name: "DoNotDisturbOn",
        component: DoNotDisturbOn
    }, {
        name: "AutoDelete",
        component: AutoDelete
    }, {
        name: "BorderColor",
        component: BorderColor
    }, {
        name: "Create",
        component: Create
    }, {
        name: "Cancel",
        component: Cancel
    }, {
        name: "CancelPresentation",
        component: CancelPresentation
    }, {
        name: "CleaningServices",
        component: CleaningServices
    }, {
        name: "Clear",
        component: Clear
    }, {
        name: "Close",
        component: Close
    }, {
        name: "Commit",
        component: Commit
    }, {
        name: "Compress",
        component: Compress
    }, {
        name: "CopyAll",
        component: CopyAll
    }, {
        name: "Autorenew",
        component: Autorenew
    }, {
        name: "Cached",
        component: Cached
    }, {
        name: "ChangeCircle",
        component: ChangeCircle
    }, {
        name: "Block",
        component: Block
    }, {
        name: "DeleteForever",
        component: DeleteForever
    }, {
        name: "DeleteOutline",
        component: DeleteOutline
    }, {
        name: "DeleteSweep",
        component: DeleteSweep
    }
]

export const imageIcons: IconType[] = [
    {
        name: "Collections",
        component: Collections
    }, {
        name: "BurstMode",
        component: BurstMode
    }, {
        name: "AddPhotoAlternate",
        component: AddPhotoAlternate
    }, {
        name: "AspectRatio",
        component: AspectRatio
    }, {
        name: "CropOriginal",
        component: CropOriginal
    }, {
        name: "CropFree",
        component: CropFree
    }, {
        name: "CenterFocusStrong",
        component: CenterFocusStrong
    }, {
        name: "CenterFocusWeak",
        component: CenterFocusWeak
    }, {
        name: "CreateNewFolder",
        component: CreateNewFolder
    },
]

export const displayIcons: IconType[] = [
    {
        name: "AlignVerticalBottom",
        component: AlignVerticalBottom
    }, {
        name: "BarChart",
        component: BarChart
    }, {
        name: "Assessment",
        component: Assessment
    }, {
        name: "BackupTable",
        component: BackupTable
    }, {
        name: "BorderAll",
        component: BorderAll
    }, {
        name: "Apps",
        component: Apps
    }, {
        name: "Ballot",
        component: Ballot
    }, {
        name: "Dashboard",
        component: Dashboard
    }, {
        name: "DashboardCustomize",
        component: DashboardCustomize
    }, {
        name: "Dataset",
        component: Dataset
    }, {
        name: "DatasetLinked",
        component: DatasetLinked
    }, {
        name: "ClearAll",
        component: ClearAll
    }, {
        name: "Computer",
        component: Computer
    },
]

export const commentsIcons: IconType[] = [
    {
        name: "CommentBank",
        component: CommentBank
    }, {
        name: "Chat",
        component: Chat
    }, {
        name: "Comment",
        component: Comment
    }, {
        name: "CommentsDisabled",
        component: CommentsDisabled
    }, {
        name: "ChatBubble",
        component: ChatBubble
    }, {
        name: "ChatBubbleOutline",
        component: ChatBubbleOutline
    }, {
        name: "CompassCalibration",
        component: CompassCalibration
    }, {
        name: "CircleNotifications",
        component: CircleNotifications
    }
]

export const colorIcons: IconType[] = [
    {
        name: "ColorLens",
        component: ColorLens
    }, {
        name: "Colorize",
        component: Colorize
    }, {
        name: "Brush",
        component: Brush
    },
]

export const libraryIcons: IconType[] = [
    {
        name: "AccountBalance",
        component: AccountBalance
    }, {
        name: "AssuredWorkload",
        component: AssuredWorkload
    }, {
        name: "AddHome",
        component: AddHome
    }, {
        name: "Balcony",
        component: Balcony
    }, {
        name: "Blinds",
        component: Blinds
    }, {
        name: "BlindsClosed",
        component: BlindsClosed
    }, {
        name: "CorporateFare",
        component: CorporateFare
    },
]

export const linksIcons: IconType[] = [
    {
        name: "AddLink",
        component: AddLink
    }, {
        name: "Attachment",
        component: Attachment
    }, {
        name: "AttachFile",
        component: AttachFile
    }, {
        name: "AttachEmail",
        component: AttachEmail
    },
]

export const statsImages: IconType[] = [
    {
        name: "DataSaverOff",
        component: DataSaverOff
    }, {
        name: "DataSaverOn",
        component: DataSaverOn
    },
]

export const settingsIcons = [
    {
        name: "AccessTime",
        component: AccessTime
    }, {
        name: "Bolt",
        component: Bolt
    }, {
        name: "BuildCircle",
        component: BuildCircle
    }, {
        name: "Build",
        component: Build
    }, {
        name: "ContactSupport",
        component: ContactSupport
    }, {
        name: "Cookie",
        component: Cookie
    }, {
        name: "Chair",
        component: Chair
    },
]

export {
    Accordion as MuiAccordion,
    AccordionActions as MuiAccordionActions,
    AccordionDetails as MuiAccordionDetails,
    AccordionSummary as MuiAccordionSummary,
    Alert as MuiAlert,
    AlertTitle as MuiAlertTitle,
    AppBar as MuiAppBar,
    Autocomplete as MuiAutocomplete,
    Avatar as MuiAvatar,
    AvatarGroup as MuiAvatarGroup,
    Backdrop as MuiBackdrop,
    Badge as MuiBadge,
    BottomNavigation as MuiBottomNavigation,
    BottomNavigationAction as MuiBottomNavigationAction,
    Box as MuiBox,
    Breadcrumbs as MuiBreadcrumbs,
    Button as MuiButton,
    ButtonBase as MuiButtonBase,
    ButtonGroup as MuiButtonGroup,
    Card as MuiCard,
    CardActionArea as MuiCardActionArea,
    CardActions as MuiCardActions,
    CardContent as MuiCardContent,
    CardHeader as MuiCardHeader,
    CardMedia as MuiCardMedia,
    Checkbox as MuiCheckbox,
    Chip as MuiChip,
    CircularProgress as MuiCircularProgress,
    ClickAwayListener as MuiClickAwayListener,
    Collapse as MuiCollapse,
    Container as MuiContainer,
    CssBaseline as MuiCssBaseline,
    Dialog as MuiDialog,
    DialogActions as MuiDialogActions,
    DialogContent as MuiDialogContent,
    DialogContentText as MuiDialogContentText,
    DialogTitle as MuiDialogTitle,
    Divider as MuiDivider,
    Drawer as MuiDrawer,
    Fab as MuiFab,
    Fade as MuiFade,
    FilledInput as MuiFilledInput,
    FormControl as MuiFormControl,
    FormControlLabel as MuiFormControlLabel,
    FormGroup as MuiFormGroup,
    FormHelperText as MuiFormHelperText,
    FormLabel as MuiFormLabel,
    GlobalStyles as MuiGlobalStyles,
    Grid as MuiGrid,
    Grow as MuiGrow,
    Hidden as MuiHidden,
    Icon as MuiIcon,
    IconButton as MuiIconButton,
    ImageList as MuiImageList,
    ImageListItem as MuiImageListItem,
    ImageListItemBar as MuiImageListItemBar,
    Input as MuiInput,
    InputAdornment as MuiInputAdornment,
    InputBase as MuiInputBase,
    InputLabel as MuiInputLabel,
    LinearProgress as MuiLinearProgress,
    Link as MuiLink,
    List as MuiList,
    ListItem as MuiListItem,
    ListItemAvatar as MuiListItemAvatar,
    ListItemButton as MuiListItemButton,
    ListItemIcon as MuiListItemIcon,
    ListItemSecondaryAction as MuiListItemSecondaryAction,
    ListItemText as MuiListItemText,
    ListSubheader as MuiListSubheader,
    Menu as MuiMenu,
    MenuItem as MuiMenuItem,
    MenuList as MuiMenuList,
    MobileStepper as MuiMobileStepper,
    Modal as MuiModal,
    NativeSelect as MuiNativeSelect,
    OutlinedInput as MuiOutlinedInput,
    Pagination as MuiPagination,
    PaginationItem as MuiPaginationItem,
    Paper as MuiPaper,
    Popover as MuiPopover,
    Popper as MuiPopper,
    Radio as MuiRadio,
    RadioGroup as MuiRadioGroup,
    Rating as MuiRating,
    ScopedCssBaseline as MuiScopedCssBaseline,
    Select as MuiSelect,
    Skeleton as MuiSkeleton,
    Slide as MuiSlide,
    Slider as MuiSlider,
    Snackbar as MuiSnackbar,
    SnackbarContent as MuiSnackbarContent,
    SpeedDial as MuiSpeedDial,
    SpeedDialAction as MuiSpeedDialAction,
    SpeedDialIcon as MuiSpeedDialIcon,
    Stack as MuiStack,
    Step as MuiStep,
    StepButton as MuiStepButton,
    StepConnector as MuiStepConnector,
    StepContent as MuiStepContent,
    StepIcon as MuiStepIcon,
    StepLabel as MuiStepLabel,
    Stepper as MuiStepper,
    SvgIcon as MuiSvgIcon,
    SwipeableDrawer as MuiSwipeableDrawer,
    Switch as MuiSwitch,
    Tab as MuiTab,
    Table as MuiTable,
    TableBody as MuiTableBody,
    TableCell as MuiTableCell,
    TableContainer as MuiTableContainer,
    TableFooter as MuiTableFooter,
    TableHead as MuiTableHead,
    TablePagination as MuiTablePagination,
    TableRow as MuiTableRow,
    TableSortLabel as MuiTableSortLabel,
    Tabs as MuiTabs,
    TabScrollButton as MuiTabScrollButton,
    TextField as MuiTextField,
    ThemeProvider as MuiThemeProvider,
    ToggleButton as MuiToggleButton,
    ToggleButtonGroup as MuiToggleButtonGroup,
    Toolbar as MuiToolbar,
    Tooltip as MuiTooltip,
    Typography as MuiTypography,
    Zoom as MuiZoom,
} from "@mui/material"