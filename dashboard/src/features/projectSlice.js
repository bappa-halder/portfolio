import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

// =======================
// Get All Projects
// =======================
export const getAllProjects = createAsyncThunk(
    "project/getAllProjects",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.get("/project/getAllProject");
            return data.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to fetch projects"
            );
        }
    }
);

// =======================
// Get Featured Projects
// =======================
export const getFeaturedProjects = createAsyncThunk(
    "project/getFeaturedProjects",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.get("/project/getFeaturedProject");
            return data.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to fetch featured projects"
            );
        }
    }
);

// =======================
// Get Single Project
// =======================
// export const getOneProject = createAsyncThunk(
//   "project/getOneProject",
//   async (id, { rejectWithValue }) => {
//     try {
//       const { data } = await api.get(`/project/getOneProject/${id}`);
//       return data.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to fetch project"
//       );
//     }
//   }
// );

// =======================
// Add Project
// =======================
export const addProject = createAsyncThunk(
    "project/addProject",
    async (formData, { rejectWithValue }) => {
        try {
            const { data } = await api.post("/project/addProject", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to add project"
            );
        }
    }
);

// =======================
// Update Project
// =======================
export const updateProject = createAsyncThunk(
    "project/updateProject",
    async ({ id, formData }, { rejectWithValue }) => {
        try {
            const { data } = await api.put(`/project/updateProject/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to update project"
            );
        }
    }
);

// =======================
// Delete Project
// =======================
export const deleteProject = createAsyncThunk(
    "project/deleteProject",
    async (id, { rejectWithValue }) => {
        try {
            await api.delete(`/project/deleteProject/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to delete project"
            );
        }
    }
);

// =======================
// Get Featured Skills
// =======================
// export const getFeaturedSkills = createAsyncThunk(
//   "project/getFeaturedSkills",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await api.get("/project/featured-skills");
//       return data.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Failed to fetch featured skills"
//       );
//     }
//   }
// );

const initialState = {
    projects: [],
    featuredProjects: [],
    project: null,
    loading: false,
    error: null,
    success: false,
    message: "",
};

const projectSlice = createSlice({
    name: "project",
    initialState,

    reducers: {
        clearProjectState: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
            state.message = "";
        },

        clearCurrentProject: (state) => {
            state.project = null;
        },
    },

    extraReducers: (builder) => {
        builder

            // ========================
            // Get All Projects
            // ========================
            .addCase(getAllProjects.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.projects = action.payload;
            })
            .addCase(getAllProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ========================
            // Get Featured Projects
            // ========================
            .addCase(getFeaturedProjects.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFeaturedProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.featuredProjects = action.payload;
            })
            .addCase(getFeaturedProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ========================
            // Get One Project
            // ========================
            //   .addCase(getOneProject.pending, (state) => {
            //     state.loading = true;
            //   })
            //   .addCase(getOneProject.fulfilled, (state, action) => {
            //     state.loading = false;
            //     state.project = action.payload;
            //   })
            //   .addCase(getOneProject.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload;
            //   })

            // ========================
            // Add Project
            // ========================
            .addCase(addProject.pending, (state) => {
                state.loading = true;
            })
            .addCase(addProject.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;
                state.projects.unshift(action.payload.data);
            })
            .addCase(addProject.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ========================
            // Update Project
            // ========================
            .addCase(updateProject.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateProject.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.message = action.payload.message;

                state.projects = state.projects.map((project) =>
                    project._id === action.payload.data._id
                        ? action.payload.data
                        : project
                );

                state.project = action.payload.data;
            })
            .addCase(updateProject.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // ========================
            // Delete Project
            // ========================
            .addCase(deleteProject.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteProject.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.projects = state.projects.filter(
                    (project) => project._id !== action.payload
                );
            })
            .addCase(deleteProject.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

        // ========================
        // Featured Skills
        // ========================
        //   .addCase(getFeaturedSkills.pending, (state) => {
        //     state.loading = true;
        //   })
        //   .addCase(getFeaturedSkills.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.featuredSkills = action.payload;
        //   })
        //   .addCase(getFeaturedSkills.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        //   });
    },
});

export const { clearProjectState, clearCurrentProject } =
    projectSlice.actions;

export default projectSlice.reducer;