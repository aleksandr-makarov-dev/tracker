package com.example.tracker.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ApiResponse<T> {

    private boolean success;
    private int code;
    private T data;
    private String error;

    private ApiResponse(boolean success, int code, T data, String error) {
        this.success = success;
        this.code = code;
        this.data = data;
        this.error = error;
    }

    public static <T> ApiResponse<T> success(int code, T data) {
        return new ApiResponse<>(true, code, data, null);
    }

    public static <T> ApiResponse<T> fail(int code, String error) {
        return new ApiResponse<>(false, code, null, error);
    }
}
