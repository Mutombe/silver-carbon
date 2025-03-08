import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Search,
  Filter,
  RefreshCcw,
  AlertTriangle,
  UserCheck,
  UserX,
  ChevronDown,
  Shield,
  User,
  X,
  Check,
} from "lucide-react";
import { fetchUsers, toggleUserActive, changeUserRole, setFilter, clearFilters, clearError } from "@/redux/slices/usersSlice";

const UserAvatar = ({ user }) => (
  <div className="flex items-center space-x-3">
    <div className="relative flex-shrink-0">
      {user.profile_picture ? (
        <img
          src={user.profile_picture}
          alt={user.username}
          className="h-10 w-10 rounded-full object-cover border-2 border-green-200"
        />
      ) : (
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center text-white font-bold text-lg">
          {user.username.charAt(0).toUpperCase()}
        </div>
      )}
      <span
        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
          user.is_active ? "bg-green-400" : "bg-red-400"
        }`}
      ></span>
    </div>
    <div className="flex flex-col">
      <span className="text-gray-900 font-medium">{user.full_name}</span>
      <span className="text-gray-500 text-sm">{user.username}</span>
    </div>
  </div>
);

const StatusBadge = ({ isActive }) => (
  <span
    className={`px-3 py-1 rounded-full text-xs font-medium ${
      isActive
        ? "bg-green-100 text-green-800"
        : "bg-red-100 text-red-800"
    }`}
  >
    {isActive ? "Active" : "Inactive"}
  </span>
);

const RoleBadge = ({ role }) => {
  let bgColor = "bg-gray-100 text-gray-800";
  
  if (role === "ADMIN") {
    bgColor = "bg-purple-100 text-purple-800";
  } else if (role === "USER") {
    bgColor = "bg-blue-100 text-blue-800";
  }
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${bgColor}`}>
      {role}
    </span>
  );
};

const ActionButton = ({ onClick, color, children, disabled = false }) => (
  <motion.button
    whileHover={{ scale: disabled ? 1 : 1.05 }}
    whileTap={{ scale: disabled ? 1 : 0.95 }}
    onClick={disabled ? null : onClick}
    className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 
      ${
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : `bg-${color}-50 text-${color}-600 hover:bg-${color}-100`
      }`}
  >
    {children}
  </motion.button>
);

const FilterDropdown = ({ 
  options, 
  value, 
  onChange, 
  label, 
  icon: Icon 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-lg bg-white border border-gray-200 flex items-center justify-between w-full"
      >
        <div className="flex items-center space-x-2">
          <Icon className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">
            {value ? options.find(option => option.value === value)?.label : label}
          </span>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute mt-1 w-full z-10 bg-white rounded-lg shadow-lg border border-gray-200 py-1"
          >
            {options.map((option) => (
              <button
                key={option.value}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center space-x-2
                  ${value === option.value ? "bg-green-50 text-green-700" : "text-gray-700"}`}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {value === option.value && <Check className="w-4 h-4" />}
                <span className={value === option.value ? "ml-0" : "ml-6"}>
                  {option.label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  confirmText, 
  confirmColor 
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{message}</p>
          </div>
          
          <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className={`px-4 py-2 rounded-lg bg-${confirmColor}-500 text-white font-medium hover:bg-${confirmColor}-600`}
            >
              {confirmText}
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user: currentUser } = useSelector((state) => state.auth);
    const { users, loading, error, filters } = useSelector((state) => state.users);
    
  
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: "",
    message: "",
    confirmText: "",
    confirmColor: "red",
    onConfirm: () => {},
  });
  
  // Check if user is authorized to access admin page
  useEffect(() => {
    if (currentUser && currentUser.role !== 'ADMIN' && !currentUser.isSuperuser) {
      navigate('/');
    }
  }, [currentUser, navigate]);
  
  // Fetch users on component mount and when filters change
  useEffect(() => {
    if (currentUser && (currentUser.role === 'ADMIN' || currentUser.isSuperuser)) {
      dispatch(fetchUsers(filters));
    }
  }, [dispatch, currentUser, filters]);

  const handleSearch = (e) => {
    dispatch(setFilter({ search: e.target.value }));
  };
  
  const handleRoleFilter = (value) => {
    dispatch(setFilter({ role: value }));
  };
  
  const handleStatusFilter = (value) => {
    dispatch(setFilter({ status: value }));
  };
  
  const handleRefresh = () => {
    dispatch(fetchUsers(filters));
  };
  
  const handleClearFilters = () => {
    dispatch(clearFilters());
  };
  
  const handleToggleActive = (userId, username, isActive) => {
    setSelectedUser({ id: userId, username });
    setModalConfig({
      isOpen: true,
      title: isActive ? "Deactivate User" : "Activate User",
      message: isActive 
        ? `Are you sure you want to deactivate "${username}"? They will no longer be able to log in.`
        : `Are you sure you want to activate "${username}"? They will be able to log in again.`,
      confirmText: isActive ? "Deactivate" : "Activate",
      confirmColor: isActive ? "red" : "green",
      onConfirm: () => dispatch(toggleUserActive(userId)),
    });
  };
  
  const handleChangeRole = (userId, username, currentRole) => {
    setSelectedUser({ id: userId, username });
    const newRole = currentRole === "ADMIN" ? "USER" : "ADMIN";
    
    setModalConfig({
      isOpen: true,
      title: "Change User Role",
      message: `Are you sure you want to change "${username}" from ${currentRole} to ${newRole}?`,
      confirmText: "Change Role",
      confirmColor: "blue",
      onConfirm: () => dispatch(changeUserRole({ userId, role: newRole })),
    });
  };
  
  const closeModal = () => {
    setModalConfig({ ...modalConfig, isOpen: false });
    setSelectedUser(null);
  };
  
  // Loading state
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-3xl font-bold text-gray-900">
                User Management
              </h1>
              <p className="text-gray-600 mt-1">
                Manage all user accounts and permissions
              </p>
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 p-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            {/* Search */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search users..."
                value={filters.search}
                onChange={handleSearch}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            {/* Role Filter */}
            <div className="w-full lg:w-48">
              <FilterDropdown
                label="Filter by Role"
                value={filters.role}
                onChange={handleRoleFilter}
                icon={Shield}
                options={[
                  { value: "", label: "All Roles" },
                  { value: "ADMIN", label: "Admin" },
                  { value: "USER", label: "User" },
                ]}
              />
            </div>
            
            {/* Status Filter */}
            <div className="w-full lg:w-48">
              <FilterDropdown
                label="Filter by Status"
                value={filters.status}
                onChange={handleStatusFilter}
                icon={User}
                options={[
                  { value: "", label: "All Status" },
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                ]}
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              <ActionButton
                onClick={handleClearFilters}
                color="gray"
                disabled={!filters.search && !filters.role && !filters.status}
              >
                <X className="w-4 h-4" />
                <span>Clear</span>
              </ActionButton>
              
              <ActionButton onClick={handleRefresh} color="green">
                <RefreshCcw className="w-4 h-4" />
                <span>Refresh</span>
              </ActionButton>
            </div>
          </div>
        </div>
        
        {/* Error Banner */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md"
          >
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-red-800">
                  There was an error
                </h3>
                <p className="mt-1 text-sm text-red-700">
                  {typeof error === 'object' ? error.detail : error}
                </p>
              </div>
              <button
                onClick={() => dispatch(clearError())}
                className="ml-auto bg-red-50 text-red-500 p-1 rounded-full hover:bg-red-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
        
        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Loading Overlay */}
          {loading && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                <p className="text-gray-600 mt-3">Loading users...</p>
              </div>
            </div>
          )}
          
          {/* Table Header */}
          <div className="hidden md:grid md:grid-cols-5 bg-gray-50 py-4 px-6">
            <div className="font-medium text-gray-500 text-sm">User</div>
            <div className="font-medium text-gray-500 text-sm">Email</div>
            <div className="font-medium text-gray-500 text-sm">Role</div>
            <div className="font-medium text-gray-500 text-sm">Status</div>
            <div className="font-medium text-gray-500 text-sm text-right">Actions</div>
          </div>
          
          {/* No users state */}
          {!loading && users.length === 0 && (
            <div className="py-16 px-6 text-center">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No users found</h3>
              <p className="mt-1 text-gray-500">
                {filters.search || filters.role || filters.status
                  ? "Try adjusting your filters"
                  : "Create new users by clicking the register button"}
              </p>
            </div>
          )}
          
          {/* User List */}
          {!loading && users.length > 0 && (
            <div className="divide-y divide-gray-200">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="py-4 px-6 hover:bg-gray-50 transition-colors"
                >
                  {/* Mobile View */}
                  <div className="md:hidden space-y-4">
                    <div className="flex justify-between items-start">
                      <UserAvatar user={user} />
                      <div className="flex flex-col items-end">
                        <RoleBadge role={user.role} />
                        <span className="text-xs text-gray-500 mt-1">
                          {new Date(user.date_joined).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm text-gray-500">Email:</span>
                      <span className="ml-2 text-sm">{user.email}</span>
                      <div className="mt-2">
                        <StatusBadge isActive={user.is_active} />
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-2">
                      <ActionButton
                        onClick={() => handleToggleActive(user.id, user.username, user.is_active)}
                        color={user.is_active ? "red" : "green"}
                        disabled={user.id === currentUser?.id}
                      >
                        {user.is_active ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                        <span>{user.is_active ? "Deactivate" : "Activate"}</span>
                      </ActionButton>
                      
                      <ActionButton
                        onClick={() => handleChangeRole(user.id, user.username, user.role)}
                        color="blue"
                        disabled={user.id === currentUser?.id}
                      >
                        <Shield className="w-4 h-4" />
                        <span>Change Role</span>
                      </ActionButton>
                    </div>
                  </div>
                  
                  {/* Desktop View */}
                  <div className="hidden md:grid md:grid-cols-5 items-center">
                    <div>
                      <UserAvatar user={user} />
                    </div>
                    <div className="text-sm text-gray-900 truncate">{user.email}</div>
                    <div>
                      <RoleBadge role={user.role} />
                    </div>
                    <div>
                      <StatusBadge isActive={user.is_active} />
                    </div>
                    <div className="flex justify-end gap-2">
                      <ActionButton
                        onClick={() => handleToggleActive(user.id, user.username, user.is_active)}
                        color={user.is_active ? "red" : "green"}
                        disabled={user.id === currentUser?.id}
                      >
                        {user.is_active ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                        <span>{user.is_active ? "Deactivate" : "Activate"}</span>
                      </ActionButton>
                      
                      <ActionButton
                        onClick={() => handleChangeRole(user.id, user.username, user.role)}
                        color="blue"
                        disabled={user.id === currentUser?.id}
                      >
                        <Shield className="w-4 h-4" />
                        <span>Change Role</span>
                      </ActionButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        onConfirm={modalConfig.onConfirm}
        title={modalConfig.title}
        message={modalConfig.message}
        confirmText={modalConfig.confirmText}
        confirmColor={modalConfig.confirmColor}
      />
    </div>
  );
};

export default AdminPage;