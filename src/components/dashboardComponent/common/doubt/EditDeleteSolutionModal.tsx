import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import { getAuthenticatedUserData, removeAuthenticationDataHandleLogout } from 'hooks/localStorageInfo';
import { ErrorMessage, SuccessMessage, WarningMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { IoAddOutline } from 'react-icons/io5';
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { addToMyDoubt, deleteDoubt, deleteDoubtSolution, getSingleDoubtWithSolution } from 'components/request/request';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { setDoubtTotalAnswerShow } from 'reducers/reducerSlice';
import { CheckActivePassAvailable } from 'services/CheckActivePassAvailable';

export default function EditDeleteSolutionModal({ item, handleAnswerChange, getAllDoubtDetails, currentPage, status, totalAnswerShow }: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter()
    const dispatch = useDispatch()
    const { passes, passesFeatures, premiumPackages } = useSelector((state: any) => state?.reducerSlice)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ color: "black" }}
            >
                <FiMoreVertical />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => {
                    // router.push("/dashboard/profile")
                    // handleClose()
                }}>
                    <div style={{ cursor: "pointer" }}>
                        <div style={{ cursor: "pointer" }} onClick={() => {
                            handleClose()
                            if (CheckActivePassAvailable(premiumPackages, passes, passesFeatures, "Any")) {
                                let findAnswer = item?.solutions?.find((item2: any) => item2?.userid == getAuthenticatedUserData()?.id)
                                if (findAnswer?.id) {
                                    handleAnswerChange(item, true)
                                } else {
                                    handleAnswerChange(item, false)
                                }
                            } else {
                                Swal.fire({
                                    title: "Oops!!",
                                    text: "You don't have any active pass",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Buy Pass"
                                }).then(async (result: any) => {
                                    if (result.isConfirmed) {
                                        router.push("/dashboard/passes")
                                    }
                                })
                            }
                        }}>
                            <span className='me-1'>
                                <AiOutlineEdit style={{ transform: "scale(1.2)" }} />
                            </span>
                            <span style={{ fontSize: "12px" }}>Edit Your Answer</span>
                        </div>
                    </div>
                </MenuItem>



                <MenuItem onClick={() => {
                    // router.push("/dashboard/profile")
                    // handleClose()
                }}>
                    <div style={{ cursor: "pointer" }}>
                        <div style={{ cursor: "pointer" }} onClick={async () => {
                            handleClose()

                            if (CheckActivePassAvailable(premiumPackages, passes, passesFeatures, "Any")) {
                                Swal.fire({
                                    title: "Are you sure?",
                                    text: "You won't be able to revert this!",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, delete it!"
                                }).then(async (result: any) => {
                                    if (result.isConfirmed) {
                                        try {
                                            let findAnswer = item?.solutions?.find((item2: any) => item2?.userid == getAuthenticatedUserData()?.id)

                                            const { data } = await deleteDoubtSolution(item?.id, findAnswer?.id, getAuthenticatedUserData()?.id)
                                            if (data?.success) {
                                                SuccessMessage(data?.message)
                                                handleAnswerChange(item, false)
                                                if (status == "All") {
                                                    getAllDoubtDetails(`page=${currentPage}&items_per_page=10`)
                                                } else if (status == "My") {
                                                    getAllDoubtDetails(`page=${currentPage}&items_per_page=10&userid=${getAuthenticatedUserData()?.id}`)
                                                }
                                                const userDoubtSolution = await getSingleDoubtWithSolution(item?.id)
                                                if (userDoubtSolution?.data?.success) {
                                                    dispatch(setDoubtTotalAnswerShow(userDoubtSolution?.data?.data))
                                                }

                                            } else {
                                                ErrorMessage(data?.message)
                                            }
                                        } catch (err) {
                                            ErrorMessage("Internal Server Error")
                                        }
                                    }
                                })
                            } else {
                                Swal.fire({
                                    title: "Oops!!",
                                    text: "You don't have any active pass",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Buy Pass"
                                }).then(async (result: any) => {
                                    if (result.isConfirmed) {
                                        router.push("/dashboard/passes")
                                    }
                                })
                            }
                        }}>
                            <span className='me-1'>
                                <AiOutlineDelete style={{ transform: "scale(1.1)" }} />
                            </span>
                            <span style={{ fontSize: "12px" }}>Delete Your Answer</span>
                        </div>
                    </div>
                </MenuItem>

            </Menu>
        </div>
    );
}