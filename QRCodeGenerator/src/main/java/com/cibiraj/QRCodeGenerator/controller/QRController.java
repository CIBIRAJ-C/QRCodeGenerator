package com.cibiraj.QRCodeGenerator.controller;
import com.cibiraj.QRCodeGenerator.service.QRService;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/qr")
public class QRController {

    private final QRService qrService;

    public QRController(QRService qrService) {
        this.qrService = qrService;
    }

    @PostMapping("/generate")
    public String generateQR(@RequestBody Map<String, String> data) throws Exception {
        return qrService.generateQRCode(data.toString());
    }



}

