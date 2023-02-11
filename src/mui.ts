import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

import { AccessTime, AccountBalance, AccountCircle, Add, AddCircle, AddCircleOutline, AddPhotoAlternate, AddHome, AddLink, AlignVerticalBottom, Apps, ArrowBackIosNew, ArrowCircleDown, ArrowCircleUp, ArrowBack, ArrowForward, ArrowForwardIos, ArrowUpward, ArrowDownward, Article, AspectRatio, Assessment, Assignment, AssignmentInd, AssignmentLate, AssignmentTurnedIn, AssuredWorkload, AttachEmail, Attribution, Attachment, AttachFile, AutoDelete, AutoStories, Autorenew, Backup, Badge, BackupTable, Balcony, Ballot, BarChart, Beenhere, Blinds, BlindsClosed, Block, Bolt, BookmarkAdd, BookmarkAdded, BookmarkRemove, BookmarkBorder, Bookmark, Bookmarks, BorderAll, BorderColor, Boy, BrowserUpdated, Brush, BuildCircle, Build, BurstMode, Cached, CalendarMonth, CalendarToday, CalendarViewDay, CalendarViewMonth, CalendarViewWeek, Cancel, CancelPresentation, CenterFocusStrong, CenterFocusWeak, Chair, ChangeCircle, Chat, ChatBubble, ChatBubbleOutline, Check, CheckBox, CheckBoxOutlineBlank, CheckCircle, CheckCircleOutline, ChevronLeft, ChevronRight, ChromeReaderMode, CleaningServices, Clear, Close, ClearAll, CloudDone, CloudDownload, CloudUpload, Collections, CollectionsBookmark, ColorLens, Colorize, Comment, CommentBank, CommentsDisabled, Commit, CompareArrows, Compress, Computer, CompassCalibration, ContactEmergency, ContactMail, ContactPage, ContactSupport, Contacts, ContentCopy, ContentPaste, ContentPasteGo, ContentPasteOff, ContentPasteSearch, ControlPoint, Cookie, CopyAll, CorporateFare, Create, CreateNewFolder, CropFree, CropOriginal, Dashboard, DashboardCustomize, DataSaverOff, DataSaverOn, Dataset, DatasetLinked, DateRange } from "@mui/icons-material"

type IconType = {
    name: string
    component: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string
    }

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
    },
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
    },
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
    },
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

export const icons: IconType[] = [
]

export * as mui from "@mui/material"
export * as muiIcons from "@mui/icons-material"